import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BjjtrackerComponent } from './bjjtracker.component';

describe('BjjtrackerComponent', () => {
  let component: BjjtrackerComponent;
  let fixture: ComponentFixture<BjjtrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BjjtrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BjjtrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
