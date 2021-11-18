import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Order} from "../models/Order";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  baseUrl ='http://localhost:8080/api/v1/orders';

  constructor(private httpClient: HttpClient) { }

  createOrder(order: Order): Observable<Order> {
    return this.httpClient.post<Order>(this.baseUrl, order);
  }

  updateOrder(order: Order): Observable<Order> {
    return this.httpClient.put<Order>(this.baseUrl, order);
  }
}
