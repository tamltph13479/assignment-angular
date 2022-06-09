import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/types/products';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  id: string;
  product: Product;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService

  ) {
    this.id = "";
    this.product = {
      _id: '',
      name: "",
      img: '',
      price: 0,
      description: ''
    }
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.productService.getProduct(this.id).subscribe((data) => {
      this.product = data;
    })
  }
}
