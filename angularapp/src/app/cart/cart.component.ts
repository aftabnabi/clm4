import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../products';
import { FormBuilder, FormsModule,  ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  items: Product[] = [];
  checkoutForm = this.formbuilder.group({
    name: this.formbuilder.group({
      name: ''
    }),
    address: this.formbuilder.group({
      address: ''
    })
  });
  constructor(
   
    private formbuilder: FormBuilder, private cartService: CartService
  ) {
    
  }
  ngOnInit() {
    this.items = this.cartService.getItems();
   


  }
  onSubmit(): void {
    this.items = this.cartService.clearCart();
    console.warn("your form has been submitted",this.checkoutForm.value);
    this.checkoutForm.reset();

  }
}
