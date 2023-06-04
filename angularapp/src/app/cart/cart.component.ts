import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';
import { Product, ProductService } from '../products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: Product[] = [];
  checkoutForm = this.formBuilder.group({
    name: this.formBuilder.group({
      name: ''
    }),
    address: this.formBuilder.group({
      address: ''
    })
  });

  constructor(
    private formBuilder: FormBuilder,
    private cartService: CartService,
    private productsService: ProductService
  ) { }

  ngOnInit() {
    this.items = this.cartService.getItems();
    this.getProductsDetails();
  }

  getProductsDetails() {
    this.items.forEach((item, index) => {
      this.productsService.getProducts().subscribe((products: Product[]) => {
        const productDetails = products.find((p) => p.id === item.id);
        if (productDetails) {
          this.items[index] = productDetails;
        }
      });
    });
  }

  onSubmit(): void {
    this.items = this.cartService.clearCart();
    console.warn('Your form has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
