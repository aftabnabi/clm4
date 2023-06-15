import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private http: HttpClient) { }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>('/api/Order');
  }

  getOrder(orderId: number): Observable<Order> {
    return this.http.get<Order>(`/api/Order/${orderId}`);
  }
  createOrder(order: Order): Observable<Order> {
    return this.http.post<Order>('/api/Orders', order);
  }
  updateOrder(order: Order, orderId: number): Observable<Order> {
    return this.http.put<Order>(`/api/Orders/${orderId}`, order);
  }

  deleteOrder(orderId: number): Observable<void> {
    return this.http.delete<void>(`/api/Orders/${orderId}`).pipe(
      catchError(error => {
        console.error('Error fetching products:', error);
        return throwError(error);
      })
    );
  }
}

export interface Order {
  id: number;
  customerId: number;
  employeeId: number;
  orderDate: Date;
  requiredDate: Date;
  shippedDate: Date;
  shipVia: string;
  freight: number;
  shipName: string;
  shipAddress: string;
  shipCity: string;
  shipRegion: string;
  shipPostalCode: number;
  shipCountry: string;
}
