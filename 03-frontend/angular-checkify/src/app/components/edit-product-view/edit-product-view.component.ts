import { Category } from './../../common/category';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DatePipe } from '@angular/common';
import * as jp from 'jsonpath';

@Component({
  selector: 'app-edit-product-view',
  templateUrl: './edit-product-view.component.html',
  styleUrls: ['./edit-product-view.component.css']
})
export class EditProductViewComponent implements OnInit {

  product: Product = new Product();

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private location: Location,
              public datepipe: DatePipe) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.handleProductDetails();
    });
  }
  // tslint:disable-next-line:typedef
  handleProductDetails() {

    // get the "id" param string. convert string to a number using the "+" symbol
    const theProductId: number = +this.route.snapshot.paramMap.get('id');

    this.productService.getProduct(theProductId).subscribe(
      data => {
        this.product = data;
      }
    );
  }
 
putToDatabase() {
  console.log(`Editing item in fridge: `);
  
  }
// takes back to the previous component
goBack():void {
  this.location.back();
}

showCategoryName(theCategory : Category){
  var categoryName = jp.query(theCategory, '$..name');
  return categoryName;
}


}
