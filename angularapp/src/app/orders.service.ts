import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private http: HttpClient) { }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>('/api/Orders');
  }

  getOrder(orderId: number): Observable<Order> {
    return this.http.get<Order>(`/api/Orders/${orderId}`);
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
  Id: number;
  CustomerId: number;
  EmployeeId: number;
  OrderDate: Date;
  RequiredDate: Date;
  ShippedDate: Date;
  ShipVia: string;
  Freight: number;
  ShipName: string;
  ShipAddress: string;
  ShipCity: string;
  ShipRegion: string;
  ShipPostalCode: number;
  ShipCountry: string;
}
