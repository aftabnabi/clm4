import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService, Product } from '../products.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  productForm!: FormGroup;
  productId!: number;
  product: Product | undefined;
  msg: string = "";
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.productId = this.route.snapshot.params['Id'];
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      UnitPrice: ['', Validators.required],
      description: ['', Validators.required]
    });

    this.productService.getProduct(this.productId).subscribe(
      (product) => {
        console.log(product);
        this.productForm.patchValue(product);
      },
      (error) => {
        console.error('Error retrieving product:', error);
        // Handle error, e.g., show an error message to the user
      }
    );
  }

  onSubmit() {
    if (this.productForm.invalid) {
      return;
    }

    const product: Product = this.productForm.value;
    this.productService.updateProduct(product, this.productId).subscribe(
      () => {
        this.msg = "Product updated successfully";
        console.log('Product updated successfully');
        // Handle success, e.g., show a success message or navigate to the product list page
      },
      (error) => {
        console.error('Error updating product:', error);
        // Handle error, e.g., show an error message to the user
      }
    );
  }
}
