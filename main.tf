resource "google_compute_instance" "default" {
  name         = var.instance_name
  machine_type = "f1-micro"

  boot_disk {
    initialize_params {
      image = "debian-cloud/debian-10"
    }
  }

  network_interface {
    network = "default"

    access_config {
    }
  }

  metadata_startup_script = <<-EOT
    #!/bin/bash
    sudo apt-get update
    sudo apt-get install -y docker.io
    sudo usermod -aG docker ${USER}
    newgrp docker
    docker run -d -p 30333:30333 -p 9933:9933 -p 9944:9944 parity/substrate --chain dev
  EOT
}

output "instance_ip" {
  value = google_compute_instance.default.network_interface[0].access_config[0].nat_ip
}
