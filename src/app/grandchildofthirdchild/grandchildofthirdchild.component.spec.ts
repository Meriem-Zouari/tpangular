import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandchildofthirdchildComponent } from './grandchildofthirdchild.component';

describe('GrandchildofthirdchildComponent', () => {
  let component: GrandchildofthirdchildComponent;
  let fixture: ComponentFixture<GrandchildofthirdchildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrandchildofthirdchildComponent]
    });
    fixture = TestBed.createComponent(GrandchildofthirdchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
