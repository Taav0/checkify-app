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

  products: Product[];
  currentFridgeId: number;

  constructor(private productService: ProductService,
              private route: ActivatedRoute) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.route.paramMap.subscribe(() => {
    this.listProducts();
  });
  }

  // tslint:disable-next-line:typedef
  listProducts() {

    const hasFridgeId: boolean = this.route.snapshot.paramMap.has('id');

    if (hasFridgeId) {
      this.currentFridgeId = +this.route.snapshot.paramMap.get('id');
    } else {
      this.currentFridgeId = 1;
    }
    this.productService.getProductList(this.currentFridgeId).subscribe(
      data => {
        this.products = data;
      }
    );
  }


}
