import {OrderItem} from "./order-item";

export class Order {
  id?: string;
  orderItems!: OrderItem[];
}
