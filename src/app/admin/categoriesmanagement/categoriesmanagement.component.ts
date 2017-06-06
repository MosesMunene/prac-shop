<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';
import { Subject } from 'rxjs';
import { ProductService } from '../../services/product.service';
import { Category } from '../../models'
=======
import { Component, OnInit, AfterViewInit } from '@angular/core';
import 'rxjs/Rx';
import { Subject } from 'rxjs/Rx';
import { ProductService } from '../../services/product.service';
import { HeaderComponent } from '../../shared/header/header.component';
import { Category } from '../../models';
>>>>>>> 4df2f36f168df3e1a36c217e7beb07d7b9944f53

@Component({
  selector: 'app-categoriesmanagement',
  templateUrl: './categoriesmanagement.component.html',
  styleUrls: ['./categoriesmanagement.component.css']
})
<<<<<<< HEAD
export class CategoriesmanagementComponent implements OnInit {
=======
export class CategoriesmanagementComponent implements OnInit, AfterViewInit {
>>>>>>> 4df2f36f168df3e1a36c217e7beb07d7b9944f53
  private dtOptions: DataTables.Settings = {};
  private dtTrigger: Subject<any> = new Subject();
  private categories: Category[] = [];

  private selectedCategory: Category = new Category();

  constructor(private productService: ProductService) { }

  ngOnInit() {
<<<<<<< HEAD
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

=======
    this.productService.getCategories()
      .subscribe((response) => {
        const categories = response.json().data;
        categories.map((item) => {
          const category = new Category();
          category.id = item._id;
          category.name = item.name;
          this.categories.push(category);
        });
      }, (err) => {

      }, () => {

      });
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next();
>>>>>>> 4df2f36f168df3e1a36c217e7beb07d7b9944f53
  }

  onclick(category: Category) {
    this.selectedCategory = category;
  }

  saveCategory() {
    if (this.selectedCategory.id) {
<<<<<<< HEAD
      console.log("this is an existing category");
    }
    else {
      console.log("this is a new category");
      this.productService.createCategory(this.selectedCategory).subscribe((response)=>{

=======
      console.log('this is an existing category');
    } else {
      console.log('this is a new category');
      this.productService.createCategory(this.selectedCategory).map((response) => {
        console.log(response);
        const category: Category = new Category();
        category.id = response.json()._id;
        category.name = response.json().name;

        this.categories.push(category);
      }).subscribe((response) => {
        this.selectedCategory = new Category();
>>>>>>> 4df2f36f168df3e1a36c217e7beb07d7b9944f53
      });
    }
  }

<<<<<<< HEAD
=======
  public deleteCategory(): void {
    if (this.selectedCategory.id) {
      this.productService.deleteCategory(this.selectedCategory)
        .subscribe((response) => {
          const status = response.json().status;
          if (status === 200) {
            let indexToRemove = 0;
            for (let index = 0; index < this.categories.length; index++) {
              if (this.categories[index].id === this.selectedCategory.id) {
                indexToRemove = index;
              }
            }
            this.categories.splice(indexToRemove, 1);
            this.selectedCategory = new Category();
          }
        });
    } else {
      this.selectedCategory = new Category();
    }
  }

>>>>>>> 4df2f36f168df3e1a36c217e7beb07d7b9944f53
}
