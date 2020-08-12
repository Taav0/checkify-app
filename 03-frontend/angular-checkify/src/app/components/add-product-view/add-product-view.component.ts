import { ProductAPI } from './../../common/product-api';
import { Component, OnInit } from '@angular/core';
import { CheckifyService } from 'src/app/services/checkify.service';
import { Product } from 'src/app/common/product';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { DatePipe } from '@angular/common';
import * as jp from 'jsonpath';
import { Fridge } from 'src/app/common/fridge';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { BarcodeService } from 'src/app/services/barcode.service';
import { Category } from 'src/app/common/category';

@Component({
  selector: 'app-add-product-view',
  templateUrl: './add-product-view.component.html',
  styleUrls: ['./add-product-view.component.css']
})
export class AddProductViewComponent implements OnInit {

  datePickerConfig: Partial<BsDatepickerConfig>;

  fridges: Fridge[] = [];
  categories: Category[] =[];
  product: Product;
  model: NgbDateStruct;
  message = '';

  constructor(private checkifyService: CheckifyService,
              private route: ActivatedRoute,
              private location: Location,
              public datepipe: DatePipe,
              private dataService: BarcodeService) {
              this.datePickerConfig = Object.assign({}, { showWeekNumbers: false,
                });
              this.product = this.dataService.sharedData;
               }

  ngOnInit(): void {
    this.listFridges();
    this.listCategories()
    this.product.imageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Question_mark_%28black%29.svg/800px-Question_mark_%28black%29.svg.png"
    ;
    console.log("Product: " + JSON.stringify(this.product));
  }
  // tslint:disable-next-line:typedef

  saveTheProduct(): void {
    this.checkifyService.updateProduct(this.product)
      .subscribe(
        response => {
          console.log(response);
            this.message = 'The product was updated successfully!';
    },
        error => {
          console.log(error);
        });
    }
    
    logInfo(){
      console.log(JSON.stringify(this.product));
    }


  // takes back to the previous component
goBack():void {
  this.location.back();
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
