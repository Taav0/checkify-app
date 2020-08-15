import { ProductService } from './../../services/product.service';
import { Fridge } from './../../common/fridge';
import { Component, OnInit } from '@angular/core';
import { CheckifyService } from 'src/app/services/checkify.service';
import { UserService } from 'src/app/services/user.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {Router} from '@angular/router';


@Component({
  selector: 'app-fridge-menu',
  templateUrl: './fridge-menu.component.html',
  styleUrls: ['./fridge-menu.component.css']
})
export class FridgeMenuComponent implements OnInit {

  fridges: Fridge[];

  constructor(private checkifyService: CheckifyService,
              private userService : UserService,
              private router: Router) { }

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

  logOut() {
  this.userService.logOut();
  this.router.navigate(['/login']);
  }


}
