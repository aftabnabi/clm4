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
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent, HomeComponent, ProductListComponent, TopbarComponent, ProductAlertsComponent, ProductDetailsComponent, CartComponent, ShippingComponent, HomeComponent
  ],
  imports: [
  BrowserModule,
  HttpClientModule,
  ReactiveFormsModule,
  RouterModule.forRoot([
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },
    {
      path: 'home',
      component: HomeComponent
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
    },
    {
      path: '**',
      redirectTo: 'product-list'
    }
  ])
],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
