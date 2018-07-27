import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WiproComponent } from './wipro.component';

describe('WiproComponent', () => {
  let component: WiproComponent;
  let fixture: ComponentFixture<WiproComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WiproComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WiproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
