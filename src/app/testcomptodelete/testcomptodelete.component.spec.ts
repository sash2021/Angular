import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestcomptodeleteComponent } from './testcomptodelete.component';

describe('TestcomptodeleteComponent', () => {
  let component: TestcomptodeleteComponent;
  let fixture: ComponentFixture<TestcomptodeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestcomptodeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestcomptodeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
