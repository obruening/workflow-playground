import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessinstancesComponent } from './processinstances.component';

describe('ProcessinstancesComponent', () => {
  let component: ProcessinstancesComponent;
  let fixture: ComponentFixture<ProcessinstancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessinstancesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessinstancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
