import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdchildComponent } from './thirdchild.component';

describe('ThirdchildComponent', () => {
  let component: ThirdchildComponent;
  let fixture: ComponentFixture<ThirdchildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThirdchildComponent]
    });
    fixture = TestBed.createComponent(ThirdchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
