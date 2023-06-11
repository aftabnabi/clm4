import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductService, Product } from './products.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];

  constructor(private http: HttpClient, private productService: ProductService) { }

  addToCart(productId: number) {
    this.productService.getProduct(productId).subscribe((productDetails: Product) => {
      this.items.push(productDetails);
    });
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingUnitPrices(): Observable<{ type: string; unitPrice: number }[]> {
    return this.http.get<{ type: string; unitPrice: number }[]>('/assets/shipping.json');
  }
}
