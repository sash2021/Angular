import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandFatherComponent } from './grand-father.component';

describe('GrandFatherComponent', () => {
  let component: GrandFatherComponent;
  let fixture: ComponentFixture<GrandFatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrandFatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandFatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
