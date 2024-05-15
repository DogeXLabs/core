variable "project_id" {
  description = "The ID of the project in which to provision resources."
  type        = string
}

variable "region" {
  description = "The region in which to provision resources."
  type        = string
  default     = "us-central1"
}

variable "zone" {
  description = "The zone in which to provision resources."
  type        = string
  default     = "us-central1-a"
}

variable "instance_name" {
  description = "Name of the VM instance."
  type        = string
  default     = "dogexnetwork-testnet-node"
}
