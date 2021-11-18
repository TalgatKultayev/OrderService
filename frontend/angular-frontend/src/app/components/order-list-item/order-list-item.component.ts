import {Component,EventEmitter, Input, OnInit, Output} from '@angular/core';
import {OrderItem} from "../../models/order-item";

@Component({
  selector: 'app-order-list-item',
  templateUrl: './order-list-item.component.html',
  styleUrls: ['./order-list-item.component.css']
})
export class OrderListItemComponent implements OnInit {

  @Input() orderItem! : OrderItem;
  @Input() isSelected: boolean = false;
  @Output() onOrderItemClicked = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onOrderItemClick(){
    this.onOrderItemClicked.emit(this.orderItem);
  }
}
