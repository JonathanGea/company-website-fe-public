import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  aboutImage = '';
  aboutText = '';

  ngOnInit() {
    // Simulasi ambil dari service
    this.aboutImage = 'https://dummyimage.com/600x400/c4c4c4/ffffff.jpg&text=about_us_image';
    this.aboutText = `Sejarah singkat PT. [Nama Perusahaan] pada mulanya didirikan pada tanggal [Tanggal Pendirian], dengan visi yang kuat untuk [sebutkan visi singkat, misal: menjadi pemimpin di industri teknologi informasi]. Berawal dari sebuah tim kecil dengan semangat inovasi yang tinggi, kami memulai perjalanan di [lokasi awal atau sektor awal, misal: sebuah garasi di Jakarta Selatan atau sektor pengembangan perangkat lunak]. Dalam kurun waktu [jumlah] tahun pertama, PT. [Nama Perusahaan] berhasil mencapai beberapa tonggak penting, termasuk [sebutkan pencapaian awal, misal: peluncuran produk X yang sukses, atau mendapatkan proyek besar pertama dari klien Y]. Dedikasi terhadap kualitas dan pemahaman mendalam akan kebutuhan pasar menjadi fondasi utama pertumbuhan kami.
Seiring berjalannya waktu, kami terus berinovasi dan memperluas cakupan layanan/produk kami. Pada tahun [Tahun Penting], PT. [Nama Perusahaan] melakukan [sebutkan ekspansi atau perubahan penting, misal: merger dengan perusahaan Z, atau membuka kantor cabang di kota A]. Kami juga berinvestasi pada sumber daya manusia terbaik dan teknologi terkini untuk memastikan kami selalu relevan dan unggul di tengah persaingan yang ketat. Hingga saat ini, PT. [Nama Perusahaan] telah berkembang menjadi [deskripsi singkat posisi saat ini, misal: salah satu pemain kunci di industri B, atau penyedia solusi terkemuka untuk segmen pasar C]. Kami berkomitmen untuk terus memberikan nilai terbaik bagi pelanggan, karyawan, dan seluruh pemangku kepentingan, sembari berkontribusi positif bagi masyarakat dan lingkungan. Kami percaya bahwa dengan integritas, inovasi, dan kolaborasi, masa depan yang lebih baik dapat kita wujudkan bersama.`;
  }
}
