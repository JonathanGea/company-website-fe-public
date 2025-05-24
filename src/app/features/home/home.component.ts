import { Component } from '@angular/core';
import { CarouselComponent } from "./carousel/carousel.component";
import { AboutUsComponent } from "../company-profiles/about-us/about-us.component";
import { VisionComponent } from "../company-profiles/vision/vision.component";
import { MissionComponent } from "../company-profiles/mission/mission.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent, AboutUsComponent, VisionComponent, MissionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  images: string[] = [
    'https://www.uksw.edu/wp-content/uploads/2025/04/Banner-Web-Desktop-Akreditasi-Baik-Sekali-S1-Bisnis-Digital-scaled.jpg',
    'https://dummyimage.com/1920x1080/c4c4c4/ffffff.jpg&text=mission_1_image',
    'https://dummyimage.com/1920x1080/c4c4c4/ffffff.jpg&text=mission_2_image'
  ];
}
