import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { OrderInputPageComponent } from './pages/order-input-page/order-input-page.component';
import { OrderDetailsPageComponent } from './pages/order-details-page/order-details-page.component';
import { OrderListItemComponent } from './components/order-list-item/order-list-item.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    OrderFormComponent,
    OrderListComponent,
    OrderInputPageComponent,
    OrderDetailsPageComponent,
    OrderListItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
