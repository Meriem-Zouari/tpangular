import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemcvComponent } from './itemcv.component';

describe('ItemcvComponent', () => {
  let component: ItemcvComponent;
  let fixture: ComponentFixture<ItemcvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemcvComponent]
    });
    fixture = TestBed.createComponent(ItemcvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
