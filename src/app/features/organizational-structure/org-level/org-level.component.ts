import { Component, Input } from '@angular/core';
import { Employee } from '../Employee.model';
import { EmployeeCardComponent } from '../employee-card/employee-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-org-level',
  standalone: true,
  imports: [CommonModule, EmployeeCardComponent],
  templateUrl: './org-level.component.html',
  styleUrl: './org-level.component.css'
})
export class OrgLevelComponent {
  
  @Input() employee!: Employee;
  @Input() level!: number;
  @Input() photoUrl!: string;

}