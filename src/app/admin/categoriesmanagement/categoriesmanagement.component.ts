import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';
import { Subject } from 'rxjs';
import { ProductService } from '../../services/product.service';
import { Category } from '../../models'

@Component({
  selector: 'app-categoriesmanagement',
  templateUrl: './categoriesmanagement.component.html',
  styleUrls: ['./categoriesmanagement.component.css']
})
export class CategoriesmanagementComponent implements OnInit {
  private dtOptions: DataTables.Settings = {};
  private dtTrigger: Subject<any> = new Subject();
  private categories: Category[] = [];

  private selectedCategory: Category = new Category();

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getCategories().map((response) => {
      let categories = response.json().data;
      categories.map((item) => {
        let category = new Category();
        category.id = item._id;
        category.name = item.name;
        this.categories.push(category);
      })
    }).subscribe((response) => {
      this.dtTrigger.next();
    })

  }

  onclick(category: Category) {
    this.selectedCategory = category;
  }

  saveCategory() {
    if (this.selectedCategory.id) {
      console.log("this is an existing category");
    }
    else {
      console.log("this is a new category");
      this.productService.createCategory(this.selectedCategory).subscribe((response)=>{

      });
    }
  }

}
