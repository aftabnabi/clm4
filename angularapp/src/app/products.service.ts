import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('/api/Products');
  }

  getProduct(productId: number): Observable<Product> {
    return this.http.get<Product>(`/api/Products/${productId}`);
  }
}

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}
