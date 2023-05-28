import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { LoginModel } from 'src/app/models/LoginModel';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',      
  styleUrls: ['./login.component.css']
})

/*metodos de validação*/ 

export class LoginComponent implements OnInit{

  loginForm! : FormGroup;

  constructor( private formBuilder : FormBuilder, 
    private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(
      {
        usuario: ['', [Validators.required]],
        senha: ['', [Validators.required]]
      }
    )
  }

  submitLogin(){
    var dadoslogin = this.loginForm.getRawValue() as LoginModel;
    debugger
  }
}
