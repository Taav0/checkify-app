import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { CheckifyService } from 'src/app/services/checkify.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product = new Product();

  constructor(private checkifyService: CheckifyService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
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

// tslint:disable-next-line:typedef
deleteFromFridge(id: string) {
  this.checkifyService.deleteProduct(id)
  .subscribe(
    data => {
      console.log(data);
      this.handleProductDetails;
    },
    error => console.log(error));
  //console.log(`Deleting item from fridge: ${theProduct.id}`);
}
}
