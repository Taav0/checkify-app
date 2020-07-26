import { ProductService } from './../../services/product.service';
import { Fridge } from './../../common/fridge';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fridge-menu',
  templateUrl: './fridge-menu.component.html',
  styleUrls: ['./fridge-menu.component.css']
})
export class FridgeMenuComponent implements OnInit {

  fridges: Fridge[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.listFridges();
  }

  listFridges() {

    this.productService.getFridges().subscribe(
      data => {
        console.log('Fridge=' + JSON.stringify(data));
        this.fridges = data;
      }
    )
  }

}
