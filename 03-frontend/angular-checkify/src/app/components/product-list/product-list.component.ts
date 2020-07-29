import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/common/product';
import { ActivatedRoute } from '@angular/router';

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
    thePageSize: number = 10;
    theTotalElements: number = 0;
    

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

    // now search for the products using keyword
    this.productService.searchProducts(theKeyword).subscribe(
      data => {
        this.products = data;
      }
    )
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
}
