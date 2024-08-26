import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnPushFilsComponent } from './on-push-fils.component';

describe('OnPushFilsComponent', () => {
  let component: OnPushFilsComponent;
  let fixture: ComponentFixture<OnPushFilsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnPushFilsComponent]
    });
    fixture = TestBed.createComponent(OnPushFilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
