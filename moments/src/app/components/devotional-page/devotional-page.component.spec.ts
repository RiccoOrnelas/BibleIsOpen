import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevotionalPageComponent } from './devotional-page.component';

describe('DevotionalPageComponent', () => {
  let component: DevotionalPageComponent;
  let fixture: ComponentFixture<DevotionalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DevotionalPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DevotionalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
