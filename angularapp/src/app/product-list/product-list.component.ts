import { Component } from '@angular/core';
import { products } from '../products';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  constructor() {
    console.log("called the construt of productlist");
  }
  products = [...products];
  share() {
    window.alert("product has been shared");
  }
  notify() {
    alert("notified");
  }
}
