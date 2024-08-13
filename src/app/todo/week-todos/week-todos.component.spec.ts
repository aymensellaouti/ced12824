import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekTodosComponent } from './week-todos.component';

describe('WeekTodosComponent', () => {
  let component: WeekTodosComponent;
  let fixture: ComponentFixture<WeekTodosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeekTodosComponent]
    });
    fixture = TestBed.createComponent(WeekTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
