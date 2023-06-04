import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { ProductService, Product } from '../products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.getProductDetails();
  }

  getProductDetails() {
    const productId = Number(this.route.snapshot.paramMap.get('productId'));
    this.productService.getProduct(productId).subscribe((productDetails: Product) => {
      this.product = productDetails;
    });
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product.id);
    alert('Product added to cart.');
  }
}
