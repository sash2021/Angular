import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MypipecomponentComponent } from './mypipecomponent.component';

describe('MypipecomponentComponent', () => {
  let component: MypipecomponentComponent;
  let fixture: ComponentFixture<MypipecomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MypipecomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MypipecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
