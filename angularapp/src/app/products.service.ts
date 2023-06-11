import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

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
  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>('/api/Products', product);
  }
  updateProduct(product: Product, productId:number): Observable<Product> {
    return this.http.put<Product>(`/api/Products/${productId}`, product);
  }

  deleteProduct(productId: number): Observable<void> {
    return this.http.delete<void>(`/api/Products/${productId}`).pipe(
      catchError(error => {
        console.error('Error fetching products:', error);
        return throwError(error);
      })
    );;
  }
}

export interface Product {
  id: number;
  name: string;
  unitPrice: number;
  description: string;
}
