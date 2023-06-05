import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductService } from '../products.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent {
  @Input() productId: number = 0;
  @Input() message: string = '';
  
  @Output() productDeleted = new EventEmitter<string>();
  constructor(private productService: ProductService) { }

  confirmDelete(): void {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productService.deleteProduct(this.productId).subscribe(() => {
        this.productDeleted.emit();
      });
    }
  }

}
