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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { MatLegacyInputModule } from '@angular/material/legacy-input';
import { MatDividerModule } from '@angular/material/divider';
import { MatBadgeModule } from '@angular/material/badge';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatLegacyMenuModule } from '@angular/material/legacy-menu';
import { MatLegacyListModule } from '@angular/material/legacy-list';
import { OrderListComponent } from './order-list/order-list.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { DeleteOrderComponent } from './delete-order/delete-order.component';
import { UpdateOrderComponent } from './update-order/update-order.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent, HomeComponent, ProductListComponent, TopbarComponent, ProductAlertsComponent,
    ProductDetailsComponent, CartComponent, ShippingComponent, HomeComponent, CreateProductComponent,
    UpdateProductComponent,
    DeleteProductComponent,
    OrderListComponent,
    CreateOrderComponent,
    DeleteOrderComponent,
    UpdateOrderComponent,
    OrderDetailComponent
  ],
  imports: [
    
    MatLegacyListModule,
    MatLegacyInputModule,
  BrowserModule,
  HttpClientModule,MatCardModule,
    ReactiveFormsModule,
    FormsModule, MatButtonModule, BrowserAnimationsModule,
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
      path: 'update-product/:Id',
      component: UpdateProductComponent
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
