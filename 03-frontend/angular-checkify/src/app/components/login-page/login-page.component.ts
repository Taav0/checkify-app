import { Component, OnInit } from '@angular/core';
import {UserService} from 'src/app/services/user.service';
import {User} from 'src/app/common/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  

  constructor(private router: Router,private userService: UserService) { }
  

  ngOnInit(): void {
  }

  public onLoginClick(){
    this.userService.onClickLogin = true;
  }

}
