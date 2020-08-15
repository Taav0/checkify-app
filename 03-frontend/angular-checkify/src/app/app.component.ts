import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-checkify';
  onClickLogin : boolean = false;

  constructor(private userService: UserService){}
  
  public onLoginClick(){
    this.onClickLogin = this.userService.onClickBoolean();
  }
}
