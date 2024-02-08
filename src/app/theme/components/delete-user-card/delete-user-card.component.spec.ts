import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteUserCardComponent } from './delete-user-card.component';

describe('DeleteUserCardComponent', () => {
  let component: DeleteUserCardComponent;
  let fixture: ComponentFixture<DeleteUserCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteUserCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteUserCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
