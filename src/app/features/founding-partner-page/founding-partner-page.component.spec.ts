import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundingPartnerPageComponent } from './founding-partner-page.component';

describe('FoundingPartnerPageComponent', () => {
  let component: FoundingPartnerPageComponent;
  let fixture: ComponentFixture<FoundingPartnerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoundingPartnerPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FoundingPartnerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
