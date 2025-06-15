import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitlePageComponent } from "../../shared/title-page/title-page.component";

@Component({
  selector: 'app-gallery-page',
  standalone: true,
  imports: [CommonModule, TitlePageComponent],
  templateUrl: './gallery-page.component.html',
  styleUrl: './gallery-page.component.css'
})
export class GalleryPageComponent {
  images = [
    { url: 'https://picsum.photos/id/23/1200/600', title: 'Pemandangan' },
    { url: 'https://picsum.photos/id/27/800/600', title: 'Kegiatan Kantor' },
    { url: 'https://picsum.photos/id/37/600/700', title: 'Acara Tahunan' },
    { url: 'https://picsum.photos/id/27/500/600', title: 'Kunjungan Lapangan' },
    { url: 'https://picsum.photos/id/217/700/500', title: 'Dokumentasi Proyek' },
    { url: 'https://picsum.photos/id/137/600/900', title: 'Team Building' },
    { url: 'https://picsum.photos/id/231/600/600', title: 'Pameran' },
    { url: 'https://picsum.photos/id/437/200/300', title: 'Workshop' },
    { url: 'https://picsum.photos/id/417/200/300', title: 'Workshop' },
  ];


}
