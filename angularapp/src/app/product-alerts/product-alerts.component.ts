import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent {
  @Input() products: any;
  @Output() notification: EventEmitter<any> = new EventEmitter();
  constructor() {
    alert("Product");
  }
  notifyme() {
    alert("notified");
  }
}
