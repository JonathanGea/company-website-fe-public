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
        { label: 'Tentang Kami', link: '/perusahaan/tentang-kami' },
        { label: 'Visi dan Misi', link: '/perusahaan/visi-misi' },
        { label: 'Struktur Organisasi', link: '/perusahaan/struktur-organisasi' },
        { label: 'Mitra Pendiri', link: '/perusahaan/mitra-pendiri' },
        {
          label: 'Personalia DPSM',
          children: [
            { label: 'Pengurus', link: '/perusahaan/personal/pengurus' },
            { label: 'Pengawas', link: '/perusahaan/personal/pengawas' },
            { label: 'Pegawai', link: '/perusahaan/personal/pegawai' },
          ],
        },
      ],
    },

    {
      label: 'Informasi',
      children: [
        { label: 'Berita', link: '/informasi/berita' },
        { label: 'Laporan-laporan (PDF)', link: '/informasi/laporan' },
        { label: 'Formulir PDF', link: '/informasi/formulir' },
      ],
    },

    {
      label: 'Galeri',
      children: [
        { label: 'Foto', link: '/galeri/foto' },
        { label: 'Video (YouTube)', link: '/galeri/video' },
      ],
    },

    { label: 'Hubungi Kami', link: '/kontak' },
    { label: 'FAQ', link: '/faq' },
    { label: 'WhatsApp', link: 'https://wa.me/6281234567890', external: true },
  ];
}
