import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDeviceCardComponent } from './delete-device-card.component';

describe('DeleteDeviceCardComponent', () => {
  let component: DeleteDeviceCardComponent;
  let fixture: ComponentFixture<DeleteDeviceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteDeviceCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteDeviceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
