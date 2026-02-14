variable "location" {
  description = "Región de Azure donde se desplegarán los recursos."
  type        = string
  default     = "eastus2"
}

variable "project_name" {
  description = "Nombre del proyecto (usado para nombrar recursos)."
  type        = string
  default     = "helixcloud"
}

variable "environment" {
  description = "Entorno de despliegue (dev, staging, prod)."
  type        = string
  default     = "prod"
}

variable "tags" {
  description = "Etiquetas comunes para los recursos."
  type        = map(string)
  default = {
    Project     = "Helix Cloud Website"
    Environment = "Production"
    ManagedBy   = "Terraform"
    Owner       = "Hector Rodriguez"
  }
}
