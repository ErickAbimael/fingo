import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDeviceCardComponent } from './add-device-card.component';

describe('AddDeviceCardComponent', () => {
  let component: AddDeviceCardComponent;
  let fixture: ComponentFixture<AddDeviceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDeviceCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDeviceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
