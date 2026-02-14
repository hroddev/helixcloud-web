terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 3.0"
    }
  }
  backend "azurerm" {} 
}

provider "azurerm" {
  features {}
}

resource "azurerm_resource_group" "rg" {
  name     = "rg-${var.environment}-${var.project_name}-website"
  location = var.location
  tags     = var.tags
}

resource "azurerm_cosmosdb_account" "db" {
  name                = "cosmos-${var.project_name}-${var.environment}"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  offer_type          = "Standard"
  kind                = "GlobalDocumentDB"

  free_tier_enabled = true

  public_network_access_enabled = true
  
  # Allow access from Azure Portal and Azure Services (Magic IP: 0.0.0.0)
  ip_range_filter = "0.0.0.0"

  consistency_policy {
    consistency_level = "Session"
  }

  geo_location {
    location          = azurerm_resource_group.rg.location
    failover_priority = 0
  }

  tags = var.tags
}

resource "azurerm_cosmosdb_sql_database" "main" {
  name                = "HelixDB"
  resource_group_name = azurerm_resource_group.rg.name
  account_name        = azurerm_cosmosdb_account.db.name
}

resource "azurerm_cosmosdb_sql_container" "contacts" {
  name                = "Contacts"
  resource_group_name = azurerm_resource_group.rg.name
  account_name        = azurerm_cosmosdb_account.db.name
  database_name       = azurerm_cosmosdb_sql_database.main.name
  partition_key_paths = ["/email"]
}

resource "azurerm_static_web_app" "web" {
  name                = "stapp-${var.project_name}-${var.environment}"
  resource_group_name = azurerm_resource_group.rg.name
  location            = var.location

  sku_tier = "Free"
  sku_size = "Free"

  app_settings = {
    "COSMOS_DB_CONNECTION_STRING" = azurerm_cosmosdb_account.db.primary_sql_connection_string
    "ACS_CONNECTION_STRING"       = azurerm_communication_service.acs.primary_connection_string
    "SENDER_ADDRESS"              = "DoNotReply@${azurerm_email_communication_service_domain.managed.from_sender_domain_name}"
    "NOTIFICATION_EMAIL"          = var.notification_email
  }

  tags = var.tags
}

resource "azurerm_communication_service" "acs" {
  name                = "acs-${var.project_name}-${var.environment}"
  resource_group_name = azurerm_resource_group.rg.name
  data_location       = "United States"
}

resource "azurerm_email_communication_service" "email" {
  name                = "email-${var.project_name}-${var.environment}"
  resource_group_name = azurerm_resource_group.rg.name
  data_location       = "United States"
}

resource "azurerm_email_communication_service_domain" "managed" {
  name             = "AzureManagedDomain"
  email_service_id = azurerm_email_communication_service.email.id
  domain_management = "AzureManaged"
}

resource "azurerm_communication_service_email_domain_association" "assoc" {
  communication_service_id = azurerm_communication_service.acs.id
  email_service_domain_id  = azurerm_email_communication_service_domain.managed.id
}
