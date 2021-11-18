import {Component, Output, OnInit} from '@angular/core';
import {OrderItem} from "../../models/order-item";
import {Router} from "@angular/router";
import {Order} from "../../models/Order";

@Component({
  selector: 'app-order-details-page',
  templateUrl: './order-details-page.component.html',
  styleUrls: ['./order-details-page.component.css']
})
export class OrderDetailsPageComponent implements OnInit {
  order!: Order;
  @Output() orderItems: OrderItem[] = [];
  storage: Storage = sessionStorage;
  constructor(private router: Router) { }

  ngOnInit(): void {
    let data = JSON.parse(this.storage.getItem('updatedOrder')!);
    if(data != null){
      this.order = data;
      this.orderItems = this.order.orderItems;
    }
  }

  updateSubmit(){
    this.router.navigateByUrl('/input');
  }
  newSubmit(){
    this.storage.removeItem('updatedOrder');
    this.router.navigateByUrl('/input');
  }

}
