import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisonMissionPageComponent } from './vison-mission-page.component';

describe('VisonMissionPageComponent', () => {
  let component: VisonMissionPageComponent;
  let fixture: ComponentFixture<VisonMissionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisonMissionPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisonMissionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
