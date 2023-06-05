import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService, Product } from '../products.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  productForm!: FormGroup; // Add "!" to indicate it will be initialized later
  @Input() msg: string = '';
  @Output() msgevent = new EventEmitter<string>();

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.productForm.invalid) {
      return;
    }

    const product: Product = this.productForm.value;
    this.productService.createProduct(product).subscribe(
      (createdProduct) => {
        console.log('Product created:', createdProduct);
        // Handle success, e.g., show a success message or navigate to the product list page
        this.clearForm();
        this.msgevent.emit(this.msg);
      },
      (error) => {
        console.error('Error creating product:', error);
        // Handle error, e.g., show an error message to the user
      }
    );
  }
  clearForm() {
    this.productForm = this.formBuilder.group({
      name: '', price: '', description:''
    });
  }
}
