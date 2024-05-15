output "instance_ips" {
  description = "The public IP addresses of the Substrate nodes"
  value       = google_compute_instance.substrate-node[*].network_interface[0].access_config[0].nat_ip
}
