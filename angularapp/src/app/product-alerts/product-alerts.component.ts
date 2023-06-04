import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product, ProductService } from '../products.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent {
  @Input() products: Product[] | undefined;
  @Output() notification: EventEmitter<any> = new EventEmitter();

  constructor(private productsService: ProductService) { }

  ngOnInit() {
    if (this.products) {
      if (this.products[0].price > 700) {
        this.notification.emit('Product price is greater than 700');
      }
    }
  }

  notifyMe() {
    alert('Notified');
  }
}
