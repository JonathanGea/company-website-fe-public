import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface MissionItem {
  title: string;
  description: string;
  image: string;
}


@Component({
  selector: 'app-mission',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mission.component.html',
  styleUrl: './mission.component.css'
})
export class MissionComponent {
  missions: MissionItem[] = [];

  ngOnInit() {
    this.missions = [
      {
        title: 'Memberikan Layanan Terbaik',
        description: 'Memberikan layanan terbaik dengan standar kualitas yang tinggi dan efisien.',
        image: 'https://dummyimage.com/600x400/c4c4c4/ffffff.jpg&text=mission_1_image'
      },
      {
        title: 'Edukasi Keuangan',
        description: 'Meningkatkan pemahaman masyarakat dalam pengelolaan keuangan yang bijak.',
        image: 'https://dummyimage.com/600x600/c4c4c4/ffffff.jpg&text=mission_1_image'
      },
      {
        title: 'Inovasi Berkelanjutan',
        description: 'Terus berinovasi melalui layanan dan produk digital yang adaptif terhadap kebutuhan zaman.',
        image: 'https://dummyimage.com/600x400/c4c4c4/ffffff.jpg&text=mission_1_image'
      },
      {
        title: 'Kepercayaan dan Transparansi',
        description: 'Menjalankan layanan yang dapat dipercaya dan akuntabel dalam berbagai aspek.',
        image: 'https://dummyimage.com/600x400/c4c4c4/ffffff.jpg&text=mission_1_image'
      },
      {
        title: 'Memberdayakan Komunitas',
        description: 'Berpartisipasi dalam memperkuat sosial kemasyarakatan dan pelatihan.',
        image: 'https://dummyimage.com/600x400/c4c4c4/ffffff.jpg&text=mission_1_image'
      }
    ];
  }
}
