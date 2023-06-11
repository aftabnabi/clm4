import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  shippingCost!: Observable<{ type: string,unitPrice: number }[]>;
  constructor(private cartService: CartService) {

  }
    ngOnInit(): void {
      this.shippingCost = this.cartService.getShippingUnitPrices();
    }

}
