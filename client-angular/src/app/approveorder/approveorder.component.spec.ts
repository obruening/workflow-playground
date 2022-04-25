import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveorderComponent } from './approveorder.component';

describe('ApproveorderComponent', () => {
  let component: ApproveorderComponent;
  let fixture: ComponentFixture<ApproveorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApproveorderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
