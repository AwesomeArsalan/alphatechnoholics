import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestblogComponent } from './testblog.component';

describe('TestblogComponent', () => {
  let component: TestblogComponent;
  let fixture: ComponentFixture<TestblogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestblogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
