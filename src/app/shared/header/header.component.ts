import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ProductService } from '../../services/product.service';
import { Category } from '../../models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private categories: Category[] = [];
  constructor(private authService: AuthService, private productService: ProductService) { }

  ngOnInit() {
    this.productService.getCategories().map((response) => {
      response.json().data.map((item) => {
       
        let category = new Category();
        category.name = item.name;
        category.url = "/products/" + item.name;
        this.categories.push(category);
        return category;
      });
    }).subscribe((response) => {
      //console.log(this.categories);
    })
    // this.categories = [
    //   { name: "bags", url: "/products/bags" },
    //   { name: "mugs", url: "/products/mugs" },
    //   { name: "clothes", url: "/products/clothes" }
    // ]
  }

  public logout() {
    console.log("logging out...")
    this.authService.logout();
  }
}
