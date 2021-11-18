import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OrderInputPageComponent} from "./pages/order-input-page/order-input-page.component";
import {OrderDetailsPageComponent} from "./pages/order-details-page/order-details-page.component";

const routes: Routes = [
  {path: 'details', component: OrderDetailsPageComponent},
  {path: 'input', component: OrderInputPageComponent},
  {path: '', component: OrderInputPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
