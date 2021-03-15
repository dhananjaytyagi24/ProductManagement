import { Component } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from "./product.service";

@Component ({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
    pageTitle = 'Product List';
    imageWidth = 50;
    imageMargin = 2;
    showImage = false;
    listFilter = 'cart';
    products: IProduct[];
    errorMessage: string;

    constructor(private productService: ProductService) {

    }

    ngOnInit(): void {
        this.productService.getProducts().subscribe({
            next: products => this.products = products,
            error: err => this.errorMessage = err
        });
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    onRatingClicked(message: string) : void {
      this.pageTitle = 'Product List: ' + message;
    }
}
