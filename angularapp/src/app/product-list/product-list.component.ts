import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../products.service';
import { Observable } from 'rxjs';
import { loremIpsum } from 'lorem-ipsum';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products$: Observable<Product[]> | undefined;
  message: string = '';
  lorem: string = loremIpsum();
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products$ =  this.productService.getProducts();
  }
     
  

  share() {
    window.alert('Product has been shared');
  }

  notify() {
    alert('Notified');
  }
  reloadProducts(): void {
    this.products$ = this.productService.getProducts();
    this.message = 'Product has been deleted.';
  }
  handleProductDeleted(message: string): void {
    this.message = message;
  }
  msg: string = "";
  handleMessage() {
    this.msg = "Product has been created successfully";
  }
}
