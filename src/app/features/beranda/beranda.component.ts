import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beranda',
  standalone: true,
  imports: [],
  templateUrl: './beranda.component.html',
  styleUrl: './beranda.component.css'
})
export class BerandaComponent implements OnInit {
  constructor() { }
  // The constructor is called when the component is created


  ngOnInit() {
    console.log('BerandaComponent initialized');
  }
}
