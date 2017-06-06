import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private product: Product;
  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      let productId = params['id'];
      if (productId) {
        console.log("product id is " + productId);
        this.productService.getProductByID(productId).map((response) => {
          this.product = response.json().data;
          console.log(this.product);
        }).subscribe(function(response){
          //empty
        })
      }
    })
  }

}
