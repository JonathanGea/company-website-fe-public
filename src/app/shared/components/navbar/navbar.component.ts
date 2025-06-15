import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface MenuItem {
  label: string;
  link?: string;
  external?: boolean;
  children?: MenuItem[];
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  menuItems: MenuItem[] = [
    { label: 'Beranda', link: '/' },

    {
      label: 'Perusahaan',
      children: [
        { label: 'Tentang Kami', link: '/company/about-us' },
        { label: 'Visi dan Misi', link: '/company/vision-missions' },
        { label: 'Struktur Organisasi', link: '/company/organizational-structure' },
        { label: 'Mitra Pendiri', link: '/company/founding-partner' },
        {
          label: 'Personalia DPSM',
          children: [
            { label: 'Pengurus', link: '/company/personal/pengurus' },
            { label: 'Pengawas', link: '/company/personal/pengawas' },
            { label: 'Pegawai', link: '/company/personal/pegawai' },
          ],
        },
      ],
    },

    {
      label: 'Informasi',
      children: [
        { label: 'Berita', link: '/information/news' },
        { label: 'Laporan-laporan (PDF)', link: '/informasi/laporan' },
        { label: 'Formulir PDF', link: '/informasi/formulir' },
      ],
    },

    {
      label: 'Galeri',
      children: [
        { label: 'Foto', link: '/gallery/foto' },
        { label: 'Video (YouTube)', link: '/gallery/video' },
      ],
    },

    { label: 'Hubungi Kami', link: '/kontak' },
    { label: 'FAQ', link: '/faq' },
    { label: 'WhatsApp', link: 'https://wa.me/6281234567890', external: true },
  ];
}
