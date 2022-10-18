import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private _loginService: LoginService
  ) { }

  ngOnInit(): void {
  }

  logar(){
    this._loginService.doLogin();
  }

  deslogar(){
    this._loginService.doLogout();
  }

}
