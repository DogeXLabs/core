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
  project     = var.project_id
  region      = var.region
  zone        = var.zone
  credentials = var.credentials
}

variable "project_id" {
  type        = string
  description = "The Google Cloud project ID."
}

variable "region" {
  type        = string
  description = "The region to deploy resources in."
}

variable "zone" {
  type        = string
  description = "The zone to deploy resources in."
}

variable "credentials" {
  type        = string
  description = "The credentials JSON for the service account."
}