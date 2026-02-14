output "static_web_app_id" {
  description = "The ID of the Static Web App"
  value       = azurerm_static_web_app.web.id
}

output "deployment_token" {
  description = "The deployment token for the Static Web App"
  value       = azurerm_static_web_app.web.api_key
  sensitive   = true
}

output "default_hostname" {
  description = "The default hostname of the static web app"
  value       = azurerm_static_web_app.web.default_host_name
}
