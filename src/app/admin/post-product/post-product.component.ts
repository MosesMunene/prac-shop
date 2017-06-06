import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Category, Product } from '../../models';
//import map from 'rxjs/Rx';
>>>>>>> 4df2f36f168df3e1a36c217e7beb07d7b9944f53

@Component({
  selector: 'app-post-product',
  templateUrl: './post-product.component.html',
  styleUrls: ['./post-product.component.css']
})
export class PostProductComponent implements OnInit {
<<<<<<< HEAD

  constructor() { }

  ngOnInit() {
=======
  productForm: FormGroup;
  categories: Category[] = [];

  constructor(private formBuilder: FormBuilder, private productService: ProductService) {
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
    console.log(formValues);

    const product: Product = new Product();
    product.name = formValues.productName as string;
    product.category = formValues.productCategory as string;
    product.description = formValues.productDescription as string;
    product.image = formValues.productImage as File;
>>>>>>> 4df2f36f168df3e1a36c217e7beb07d7b9944f53
  }

}
