import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListecvComponent } from './listecv.component';

describe('ListecvComponent', () => {
  let component: ListecvComponent;
  let fixture: ComponentFixture<ListecvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListecvComponent]
    });
    fixture = TestBed.createComponent(ListecvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
