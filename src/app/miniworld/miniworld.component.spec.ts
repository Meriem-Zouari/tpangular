import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniworldComponent } from './miniworld.component';

describe('MiniworldComponent', () => {
  let component: MiniworldComponent;
  let fixture: ComponentFixture<MiniworldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiniworldComponent]
    });
    fixture = TestBed.createComponent(MiniworldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
