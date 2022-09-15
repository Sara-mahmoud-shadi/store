import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormControl,FormGroup,Validators } from'@angular/forms';
import {AuthService} from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logindata:any;
  constructor(private Router:Router,private _AuthService:AuthService) { }

  ngOnInit(): void {
    this.logindata=new FormGroup({

      
      'email': new FormControl(null,[Validators.email,Validators.required]),
      'password': new FormControl(null,[Validators.maxLength(15),Validators.required])
    });
  }
  getdata(logindata:any){

    this.Router.navigate(['/home'])
  }

}
