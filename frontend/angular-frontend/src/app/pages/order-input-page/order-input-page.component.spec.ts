import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderInputPageComponent } from './order-input-page.component';

describe('OrderInputPageComponent', () => {
  let component: OrderInputPageComponent;
  let fixture: ComponentFixture<OrderInputPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderInputPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderInputPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
