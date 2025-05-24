import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {

  @Input() images: string[] = [];
  currentIndex: number = 0;
  totalImagesLoaded: number = 0;

  constructor() { }

  ngOnInit(): void {
    // Opsional: Auto-play slider
    setInterval(() => {
      this.nextImage();
    }, 5000);
  }

  nextImage(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevImage(): void {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  goToImage(index: number): void {
    this.currentIndex = index;
  }

  onImageLoad(event: Event): void {
    this.totalImagesLoaded++;
    // Opsional: Lakukan sesuatu setelah semua gambar dimuat (misalnya, sembunyikan spinner)
    if (this.totalImagesLoaded === this.images.length) {
      console.log('All images loaded!');
    }
  }

}
