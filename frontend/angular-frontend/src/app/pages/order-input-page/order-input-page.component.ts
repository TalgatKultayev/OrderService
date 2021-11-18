import {Component, OnInit, ViewChild} from '@angular/core';
import {OrderFormComponent} from "../../components/order-form/order-form.component";
import {OrderItem} from "../../models/order-item";
import {State} from "../../models/State";
import {Order} from "../../models/Order";
import {OrderService} from "../../services/order.service";
import {UiService} from "../../services/ui.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-order-input-page',
  templateUrl: './order-input-page.component.html',
  styleUrls: ['./order-input-page.component.css']
})
export class OrderInputPageComponent implements OnInit {
  updatedOrder?: Order
  storage: Storage = sessionStorage;

  orderItems: OrderItem[] = [];
  isEditingState = true;
  @ViewChild(OrderFormComponent)
  private orderFormComponent!: OrderFormComponent;

  constructor(private orderService: OrderService, private uiService: UiService, private router: Router) {
  }

  ngOnInit(): void {
    let data = JSON.parse(this.storage.getItem('updatedOrder')!);
    if (data != null) {
      this.updatedOrder = data;
    }
  }

//productDetails from OrderForm, were pushed to orderItems array
  onNewOrderItemClicked(orderItem: OrderItem) {
    let present: boolean = false;
    for (let tempOrderItem of this.orderItems) {
      if (orderItem.id === tempOrderItem.id) {
        present = true;
      }
    }
    if (present) {
      for (let tempOrderItem of this.orderItems) {
        if (orderItem.id === tempOrderItem.id) {
          tempOrderItem.id = orderItem.id;
          tempOrderItem.productName = orderItem.productName;
          tempOrderItem.productPrice = orderItem.productPrice;
          tempOrderItem.quantity = orderItem.quantity;
        }
      }
    } else {
      this.orderItems.push(orderItem);
    }
  }

//when item selected from list, its data moves to form for update
  onOrderItemSelected(orderItem: OrderItem) {
    this.orderFormComponent.onOrderItemSelected(orderItem);
  }

  createOrder() {
    const order: Order = {
      orderItems: this.orderItems
    };
    console.log(JSON.stringify(order));
    this.orderFormComponent.productForm.disable();
    this.orderService.createOrder(order)
      .subscribe({
        next: (response) => {
          alert(`Your order has been received.\nOrder tracking number: ${response.id}`);
          this.updatedOrder = response;
          this.storage.setItem('updatedOrder', JSON.stringify(this.updatedOrder));
          this.router.navigateByUrl("/details");

        },
        error: (err) => {
          alert(`There was an error: ${err.message}`);
        }
      });
  }

  updateOrder() {
    const order: Order = {
      orderItems: this.orderItems
    };

    this.orderService.updateOrder(order)
      .subscribe({
        next: (response) => {
          alert(`Your order has been updated.\nOrder tracking number: ${response.id}`);
          this.updatedOrder = response;
          this.storage.setItem('updatedOrder', JSON.stringify(this.updatedOrder));
          this.router.navigateByUrl("/details");

        },
        error: (err) => {
          alert(`There was an error: ${err.message}`);
        }
      });
  }

  onOrderSubmit() {
    this.uiService.stateSubject.next(State.PREVIEW);
  }

  sendToServer() {
    if (this.orderFormComponent.productForm.invalid) {
      this.orderFormComponent.productForm.markAllAsTouched();
      return;
    }

    if (!this.updatedOrder) {
      this.createOrder();
    } else {
      this.updateOrder();
    }
  }
}
