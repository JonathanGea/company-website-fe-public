import { Component } from '@angular/core';
import { OrgLevelComponent } from './org-level/org-level.component';
import { Employee } from './Employee.model';
import { TitlePageComponent } from "../../shared/title-page/title-page.component";

@Component({
  selector: 'app-organizational-structure',
  standalone: true,
  imports: [OrgLevelComponent, TitlePageComponent],
  templateUrl: './organizational-structure.component.html',
  styleUrl: './organizational-structure.component.css'
})
export class OrganizationalStructureComponent {

  title: string = 'Struktur Organisasi';
  employees: Employee[] = [
    {
      name: 'John Doe',
      position: 'CEO',
      photoUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
      subordinates: [
        {
          name: 'Jane Smith',
          position: 'CTO',
          photoUrl: 'https://randomuser.me/api/portraits/women/1.jpg',
          subordinates: [
            {
              name: 'Bob Johnson',
              position: 'Lead Developer',
              photoUrl: 'https://randomuser.me/api/portraits/men/2.jpg'
            },
            {
              name: 'Alice Williams',
              position: 'UX Designer',
              photoUrl: 'https://randomuser.me/api/portraits/women/2.jpg'
            }
          ]
        },
        {
          name: 'Mike Brown',
          position: 'CFO',
          photoUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
          subordinates: [
            {
              name: 'Sarah Davis',
              position: 'Accountant',
              photoUrl: 'https://randomuser.me/api/portraits/women/3.jpg'
            }
          ]
        }
      ]
    }
  ];

}