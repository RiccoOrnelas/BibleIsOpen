import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDevotionalComponent } from './edit-devotional.component';

describe('EditDevotionalComponent', () => {
  let component: EditDevotionalComponent;
  let fixture: ComponentFixture<EditDevotionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditDevotionalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditDevotionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
