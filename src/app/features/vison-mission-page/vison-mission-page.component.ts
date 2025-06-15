import { Component } from '@angular/core';
import { VisionComponent } from "../company-profiles/vision/vision.component";
import { MissionComponent } from "../company-profiles/mission/mission.component";
import { TitlePageComponent } from "../../shared/title-page/title-page.component";

@Component({
  selector: 'app-vison-mission-page',
  standalone: true,
  imports: [VisionComponent, MissionComponent, TitlePageComponent],
  templateUrl: './vison-mission-page.component.html',
  styleUrl: './vison-mission-page.component.css'
})
export class VisonMissionPageComponent {
  title: string = 'Visi dan Misi Perusahaan';
}
