import { CheckifyService } from 'src/app/services/checkify.service';
import { Category } from './../../common/category';
import { Component, OnInit, NgModule } from '@angular/core';
import { Product } from 'src/app/common/product';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { DatePipe } from '@angular/common';
import * as jp from 'jsonpath';
import { Fridge } from 'src/app/common/fridge';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

import {FormBuilder, Validators} from '@angular/forms';
import { CheckifyService } from 'src/app/services/checkify.service';

@Component({
  selector: 'app-edit-product-view',
  templateUrl: './edit-product-view.component.html',
  styleUrls: ['./edit-product-view.component.css']
})
export class EditProductViewComponent implements OnInit {

  datePickerConfig: Partial<BsDatepickerConfig>;

  fridges: Fridge[] = [];
  categories: any[] =[];
  product: Product = new Product();
  model: NgbDateStruct;
  message = '';

  constructor(private checkifyService: CheckifyService,
              private route: ActivatedRoute,
              private router: Router,
              private location: Location,
              public datepipe: DatePipe,) {
                this.datePickerConfig = Object.assign({}, { showWeekNumbers: false,
                });
               }

  ngOnInit(): void {
    this.listFridges();
    this.route.paramMap.subscribe(() => {
      this.handleProductDetails();
    });
  }
  // tslint:disable-next-line:typedef
  handleProductDetails() {

    // get the "id" param string. convert string to a number using the "+" symbol
    const theProductId: number = +this.route.snapshot.paramMap.get('id');

    this.checkifyService.getProduct(theProductId).subscribe(
      data => {
        this.product = data;
      }
    );
  }
 
updateTheProduct(): void {
  this.checkifyService.updateProduct(this.product.id, this.product)
    .subscribe(
      response => {
        console.log(response);
          this.message = 'The product was updated successfully!';
  },
      error => {
        console.log(error);
      });
  }


  // takes back to the previous component
goBack():void {
  this.location.back();
}

showCategoryName(theCategory : Category){
  var categoryName = jp.query(theCategory, '$..name') ;
  return categoryName ;
}  

listFridges() {
  this.checkifyService.getFridges().subscribe(
    data => {
      console.log('Fridge=' + JSON.stringify(data));
      this.fridges = data;
    }
  )
}

listCategories() {
  this.checkifyService.getCategories().subscribe(
    data => {
      console.log('Category=' + JSON.stringify(data));
      this.categories = data;
    }
  )
}



}
