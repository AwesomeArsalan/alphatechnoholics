import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Testblog2Component } from './testblog2.component';

describe('Testblog2Component', () => {
  let component: Testblog2Component;
  let fixture: ComponentFixture<Testblog2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Testblog2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Testblog2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
