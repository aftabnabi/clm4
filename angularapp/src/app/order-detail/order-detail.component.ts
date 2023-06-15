import { Component, OnInit } from '@angular/core';
import { Order, OrderService } from '../orders.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit{
  order!: Order;
  orderId!: number;
  constructor(private orderService: OrderService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    
     this.orderService.getOrder(Number(this.route.snapshot.paramMap.get("Id"))).subscribe((data:Order) => {
       this.order = data;
       console.log(this.order);
    });
      
  }
  

}
