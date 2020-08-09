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

@Component({
  selector: 'app-add-product-view',
  templateUrl: './add-product-view.component.html',
  styleUrls: ['./add-product-view.component.css']
})
export class AddProductViewComponent implements OnInit {

  datePickerConfig: Partial<BsDatepickerConfig>;

  fridges: Fridge[] = [];
  categories: any[] =[];
  productToDatabase: Product = new Product;

  productAPI = {
    id: '1',
    barcode: '11111111',
    name: 'ProductFromAPI',
    description: 'This is sample Product from API',
    imageUrl: 'https://m2.kaubamaja.ee/media/catalog/product/cache/1/image/840x/6dcdb3bec3b7d3d8fa2d31ce95a0090e/5/0/5060335636225.jpg'
  }

  model: NgbDateStruct;
  message = '';

  constructor(private checkifyService: CheckifyService,
              private route: ActivatedRoute,
              private location: Location,
              public datepipe: DatePipe) {
                this.datePickerConfig = Object.assign({}, { showWeekNumbers: false,
                });
               }

  ngOnInit(): void {
    this.listFridges();
    this.listCategories();
  }
  // tslint:disable-next-line:typedef

saveTheProduct(): void {
    console.log('Product was saved')
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
