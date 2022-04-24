import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeiterComponent } from './leiter.component';

describe('LeiterComponent', () => {
  let component: LeiterComponent;
  let fixture: ComponentFixture<LeiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeiterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
