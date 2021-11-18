import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {OrderItem} from "../../models/order-item";

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  @Input() orderItems: OrderItem[] = [];
  @Output() onOrderItemClicked = new EventEmitter();

  selectedOrderItem?: OrderItem;

  constructor() {
  }

  ngOnInit(): void {
  }

  onOrderItemSelected(orderItem: OrderItem) {
    this.selectedOrderItem = orderItem;
    this.onOrderItemClicked.emit(orderItem);
  }

  calculateTotal(): number {
    let sum = 0;
    this.orderItems.forEach((orderItem) => sum += orderItem.productPrice * orderItem.quantity);
    return sum;
  }
}
