import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitlePageComponent } from "../../shared/title-page/title-page.component";

@Component({
  selector: 'app-founding-partner-page',
  standalone: true,
  imports: [CommonModule, TitlePageComponent],
  templateUrl: './founding-partner-page.component.html',
  styleUrl: './founding-partner-page.component.css'
})
export class FoundingPartnerPageComponent {
  pendiri: string = 'PT Pembangunan Jaya';

  title: string = 'Mitra Pendiri';
  
  mitraPendiri: string[] = [
    'PT Arkonin',
    'PT Pembangunan Jaya Ancol Tbk',
    'PT Jaya Beton Indonesia',
    'PT Jaya Construction Management Manggala Pratama',
    'PT Seabreez Indonesia',
    'PT Jaya Gas Indonesia',
    'PT Jaya Konstruksi Manggala Pratama Tbk',
    'PT Jaya Land',
    'PT Jaya Real Property Tbk',
    'PT Jaya Teknik Indonesia',
    'PT Jaya Trade Indonesia',
    'PT Jaya Obayashi',
    'Yayasan Pendidikan Jaya',
    'PT Jaya Garden Polis',
    'PT Jaya Celcon Prima',
    'PT Arkonin Engineering MP',
    'PT Jakarta Tollroad Development',
    'PT Pembangunan Jaya Infrastruktur',
    'Yayasan Pembangunan Jaya Raya'
  ];
}
