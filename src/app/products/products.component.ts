import { Component, OnInit } from '@angular/core';
import { Product } from '../models';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';

import 'rxjs/Rx'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  private products: Product[];
  private dataAvailable: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe((params) => {
      let category = params['category'];
      console.log("category is " + category);
      if (category) {
        this.productService.getProductsByCategory(category).map((response) => {
          this.products = response.json().data;
          this.dataAvailable = true;
        }).subscribe(function (response) {

        });
      } else {
        this.productService.getAllProducts().map((response) => {
          this.products = response.json().data;
          this.dataAvailable = true;
          return response;
        })
          .subscribe(function (response) {
            //this.products = response.json().data;
            //this.dataAvailable = true;
            //console.log(this.products);
          });
      }
    })

  }
}