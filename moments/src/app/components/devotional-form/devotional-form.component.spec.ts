import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevotionalFormComponent } from './devotional-form.component';

describe('DevotionalFormComponent', () => {
  let component: DevotionalFormComponent;
  let fixture: ComponentFixture<DevotionalFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DevotionalFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DevotionalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
