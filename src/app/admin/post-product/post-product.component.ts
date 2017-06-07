import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { NotificationService } from '../../services/notification.service';
import { Category, Product } from '../../models';
//import map from 'rxjs/Rx';

@Component({
  selector: 'app-post-product',
  templateUrl: './post-product.component.html',
  styleUrls: ['./post-product.component.css']
})
export class PostProductComponent implements OnInit {
  productForm: FormGroup;
  categories: Category[] = [];

  constructor(private formBuilder: FormBuilder, private productService: ProductService, private notificationService: NotificationService) {
    this.createForm();
  }

  ngOnInit() {
    this.productService.getCategories().map((response) => {
      const categories = response.json().data;
      categories.map((item) => {
        const category = new Category();
        category.id = item._id;
        category.name = item.name;
        this.categories.push(category);
      });
    }).subscribe((response) => {

    });
  }

  public createForm() {
    this.productForm = this.formBuilder.group({
      productName: ['', Validators.required],
      productCategory: ['', Validators.required],
      productDescription: '',
      productImage: '',
      productQuantity: ['', Validators.required],
      productPrice: ['', Validators.required]
    });
  }

  public onSubmit() {
    const formValues = this.productForm.value;
    const product: Product = new Product();

    product.name = formValues.productName as string;
    product.category = formValues.productCategory as string;
    product.description = formValues.productDescription as string;
    product.price = formValues.productPrice as number;
    product.quantity = formValues.productQuantity as number;
    product.image = formValues.productImage as File;

    this.productService.createProduct(product).subscribe((response) => {
      console.log(response);
      const data = response.json().data;
      if (data.success) {
        this.notificationService.notifySuccess(data.message);
      }
      else {
        this.notificationService.notifyError(data.message);
      }
    })
  }

}
