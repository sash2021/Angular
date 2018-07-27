import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InBuiltDirectiveComponentComponent } from './in-built-directive-component.component';

describe('InBuiltDirectiveComponentComponent', () => {
  let component: InBuiltDirectiveComponentComponent;
  let fixture: ComponentFixture<InBuiltDirectiveComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InBuiltDirectiveComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InBuiltDirectiveComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
