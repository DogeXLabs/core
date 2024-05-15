provider "google" {
  credentials = file("key.json")
  project     = var.project_id
  region      = var.region
}

resource "google_compute_instance" "substrate-node" {
  count        = 3
  name         = "substrate-node-${count.index}"
  machine_type = "e2-micro"
  zone         = var.zone

  boot_disk {
    initialize_params {
      image = "debian-cloud/debian-11"
    }
  }

  network_interface {
    network = "default"
    access_config {
      // Ephemeral public IP
    }
  }

  metadata_startup_script = <<-EOF
    #!/bin/bash
    sudo apt-get update
    sudo apt-get install -y docker.io docker-compose git
    sudo usermod -aG docker ${google_compute_instance.substrate-node[count.index].name}
    curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
    source $HOME/.cargo/env
    rustup update nightly
    rustup target add wasm32-unknown-unknown --toolchain nightly
    git clone https://github.com/paritytech/substrate-node-template
    cd substrate-node-template
    cargo build --release
    ./target/release/node-template --chain local --name NODE_${count.index} --validator
  EOF
}

output "instance_ips" {
  description = "The public IP addresses of the Substrate nodes"
  value       = google_compute_instance.substrate-node[*].network_interface[0].access_config[0].nat_ip
}
