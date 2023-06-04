import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../products.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products$: Observable<Product[]> | undefined;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products$ =  this.productService.getProducts();/*.subscribe((products: Product[]) => {
       console.log(products);
    }, (err: Error) => {
      console.error(err);
    });*/
  }
     
  

  share() {
    window.alert('Product has been shared');
  }

  notify() {
    alert('Notified');
  }
}
