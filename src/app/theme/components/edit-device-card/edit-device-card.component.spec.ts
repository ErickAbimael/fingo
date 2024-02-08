import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDeviceCardComponent } from './edit-device-card.component';

describe('EditDeviceCardComponent', () => {
  let component: EditDeviceCardComponent;
  let fixture: ComponentFixture<EditDeviceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDeviceCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDeviceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
