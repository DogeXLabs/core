terraform {
  required_providers {
    google = {
      source = "hashicorp/google"
      version = "~> 4.0"
    }
  }
  required_version = ">= 1.0.0"
}

provider "google" {
  project = var.project_id
  region  = var.region
  zone    = var.zone
  credentials = filebase64decode(var.credentials)
}

variable "credentials" {
  type = string
  description = "The contents of the service account JSON file."
  default = ""
}
