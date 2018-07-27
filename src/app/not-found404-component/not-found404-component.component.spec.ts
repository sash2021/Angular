import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFound404ComponentComponent } from './not-found404-component.component';

describe('NotFound404ComponentComponent', () => {
  let component: NotFound404ComponentComponent;
  let fixture: ComponentFixture<NotFound404ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotFound404ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFound404ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
