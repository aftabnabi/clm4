import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { TopbarComponent } from './top-bar/top-bar.component';
import { RouterModule } from '@angular/router';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, ProductListComponent, TopbarComponent, ProductAlertsComponent, ProductDetailsComponent, CartComponent, ShippingComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, ReactiveFormsModule,
    RouterModule.forRoot([
      {
          path: '', component: ProductListComponent 
      },

      {
        path: 'product-list',
        component: ProductListComponent
      },
      {
        path: 'top-bar',
        component: TopbarComponent
      },
      {
        path: 'product-alerts',
        component: ProductAlertsComponent
      },
      {
        path: 'products/:productId',
        component: ProductDetailsComponent
      },
      {
        path: 'cart',
        component: CartComponent
      },
      {
        path: 'shipping',
        component: ShippingComponent
      }
  ])],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
