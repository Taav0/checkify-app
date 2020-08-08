import { ProductService } from './../../services/product.service';
import { Fridge } from './../../common/fridge';
import { Component, OnInit } from '@angular/core';
import { CheckifyService } from 'src/app/services/checkify.service';

@Component({
  selector: 'app-fridge-menu',
  templateUrl: './fridge-menu.component.html',
  styleUrls: ['./fridge-menu.component.css']
})
export class FridgeMenuComponent implements OnInit {

  fridges: Fridge[];

  constructor(private checkifyService: CheckifyService) { }

  ngOnInit() {
    this.listFridges();
  }

  listFridges() {

    this.checkifyService.getFridges().subscribe(
      data => {
        this.fridges = data;
      }
    )
  }


}
