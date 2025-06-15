import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-employee-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-card.component.html',
  styleUrl: './employee-card.component.css'
})
export class EmployeeCardComponent {
  @Input() name: string = '';
  @Input() position: string = '';
  @Input() photoUrl: string = '';
}