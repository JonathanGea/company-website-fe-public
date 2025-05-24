import { Component } from '@angular/core';

@Component({
  selector: 'app-vision',
  standalone: true,
  imports: [],
  templateUrl: './vision.component.html',
  styleUrl: './vision.component.css'
})
export class VisionComponent {

  visionText = '';

  ngOnInit() {
    this.visionText = `Menjadi perusahaan yang terpercaya di sektor industri [sebutkan sektor industri Anda, misal: teknologi informasi, manufaktur, energi terbarukan, jasa keuangan] dengan menyediakan solusi inovatif dan berkelanjutan yang memberikan nilai superior bagi pelanggan, karyawan, serta berkontribusi positif terhadap lingkungan dan masyarakat.`;
  }

}
