import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-checkify';
  

  constructor(private userService: UserService){
  }

  logged():boolean{
    if(this.userService.currentUserValue) {
      return true}
      else{
    return false;
  }
  }
}
