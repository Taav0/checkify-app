import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/common/product';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import * as moment from 'moment';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list-grid.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  currentFridgeId: number = 1;
  previousFridgeId: number = 1;
  searchMode: boolean = false;
  


    // new properties for pagination
    thePageNumber: number = 1;
    thePageSize: number = 5;
    theTotalElements: number = 0;
    
    previousKeyword: string = null;

  constructor(private productService: ProductService,
              private route: ActivatedRoute) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.route.paramMap.subscribe(() => {
    this.listProducts();
  });
  }

  listProducts() {
        this.searchMode = this.route.snapshot.paramMap.has('keyword');

    if (this.searchMode) {
      this.handleSearchProducts();
    }
    else {
      this.handleListProducts();
    }
  }
  
  handleSearchProducts() {

    const theKeyword: string = this.route.snapshot.paramMap.get('keyword');

    // if we have a different keyword than previous
    // then set thePageNumber to 1

    if (this.previousKeyword != theKeyword) {
      this.thePageNumber = 1;
    }

    this.previousKeyword = theKeyword;

    console.log(`keyword=${theKeyword}, thePageNumber=${this.thePageNumber}`);

    // now search for the products using keyword
    this.productService.searchProductsPaginate(this.thePageNumber - 1,
                                               this.thePageSize,
                                               theKeyword).subscribe(this.processResult());
                                               
  }

  // tslint:disable-next-line:typedef
  handleListProducts() {

    const hasFridgeId: boolean = this.route.snapshot.paramMap.has('id');

    if (hasFridgeId) {
      this.currentFridgeId = +this.route.snapshot.paramMap.get('id');
    } else {
      this.currentFridgeId = 1;
    }
    // check if we have a different fridge than previous
    if (this.previousFridgeId != this.currentFridgeId) {
      this.thePageNumber = 1;
    }

    this.previousFridgeId = this.currentFridgeId;

    console.log(`currentFridgeId=${this.currentFridgeId}, thePageNumber=${this.thePageNumber}`);



    this.productService.getProductListPaginate(this.thePageNumber - 1,
                                              this.thePageSize,
                                              this.currentFridgeId)
                                    .subscribe(this.processResult());
  }

  processResult() {
    return data => {
      this.products = data._embedded.products;
      this.thePageNumber = data.page.number + 1;
      this.thePageSize = data.page.size;
      this.theTotalElements = data.page.totalElements;
    };
  }

  updatePageSize(pageSize: number) {
    this.thePageSize = pageSize;
    this.thePageNumber = 1;
    this.listProducts();
  }

  deleteFromFridge(id: string) {
    this.productService.deleteProduct(id)
    .subscribe(
      data => {
        console.log(data);
        this.handleListProducts();
      },
      error => console.log(error));
      console.log("inside compnent.ts");
}
     showDaysLeft(date : Date){
      let todayDate = new Date();
      var productExpireDate = new Date(date);
      let daysLeft = Math.floor((productExpireDate.getTime() - todayDate.getTime()) / 1000 / 60 / 60 / 24);

      if(daysLeft>0){
      return daysLeft;
      }else
        {return "expired";}

    }

    
}
