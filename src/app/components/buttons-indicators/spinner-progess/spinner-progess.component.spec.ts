import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerProgessComponent } from './spinner-progess.component';

describe('SpinnerProgessComponent', () => {
  let component: SpinnerProgessComponent;
  let fixture: ComponentFixture<SpinnerProgessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpinnerProgessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerProgessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
