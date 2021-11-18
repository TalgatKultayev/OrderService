import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {OrderItem} from "../../models/order-item";
import {State} from "../../models/State";
import {UiService} from "../../services/ui.service";
import {CustomValidator} from "../../validators/custom-validator";

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {
  @Output() onNewOrderItem = new EventEmitter();
  updateId?: string;

  isEditingState = true;

  productForm = new FormGroup({
    productName: new FormControl('',
      [Validators.required, Validators.maxLength(50), Validators.minLength(2),
        Validators.pattern('^[a-zA-Z -]+$'), CustomValidator.notOnlyWhitespace]),
    productPrice: new FormControl(0.01,
      [Validators.required, Validators.pattern('^[0-9]+(.[0-9][0-9]?)?$')]),
    productQuantity: new FormControl(1,
      [Validators.required, Validators.pattern('^[0-9]{1,9}$')])
  });

  constructor(private uiService: UiService) {
    uiService.stateSubject
      .subscribe((state) => {
        this.isEditingState = (state === State.EDITING);
        if (state === State.PREVIEW) {
          this.productForm.disable();
        } else {
          this.productForm.enable();
        }
      });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    let localId: string;
    if (this.updateId) {
      localId = this.updateId;
    } else {
      localId = this.makeId(15);
    }
    const newOrderItem: OrderItem = {
      id: localId,
      productName: this.productForm.get('productName')?.value,
      productPrice: this.productForm.get('productPrice')?.value,
      quantity: this.productForm.get('productQuantity')?.value
    };
    console.log(JSON.stringify(newOrderItem));
    this.onNewOrderItem.emit(newOrderItem);


    //resetting to default value
    this.productForm.get('productName')?.reset('');
    this.productForm.get('productPrice')?.reset(0);
    this.productForm.get('productQuantity')?.reset(1);
  }

  onOrderItemSelected(orderItem: OrderItem) {
    this.updateId = orderItem.id;
    this.productForm.get('productName')?.setValue(orderItem.productName);
    this.productForm.get('productPrice')?.setValue(orderItem.productPrice);
    this.productForm.get('productQuantity')?.setValue(orderItem.quantity);
  }

  enableForm() {
    this.uiService.stateSubject.next(State.EDITING);
  }

  private makeId(length: number) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() *
        charactersLength));
    }
    return result;
  }

  //getter methods used for validation
  get productName() {
    return this.productForm.get('productName');
  }

  get productPrice() {
    return this.productForm.get('productPrice');
  }

  get productQuantity() {
    return this.productForm.get('productQuantity');
  }
}
