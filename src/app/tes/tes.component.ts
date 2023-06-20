import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from'@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';
@Component({
  selector: 'app-tes',
  templateUrl: './tes.component.html',
  styleUrls: ['./tes.component.css']
})
export class TesComponent implements OnInit {
  signindata:any;
  storeData:any;
  constructor(private Router:Router ,private _AuthService:AuthService) { }

  ngOnInit(): void {
    this.signindata=new FormGroup({
      'firstname':new FormControl(null,[Validators.required]),
      'lastname': new FormControl(null,[Validators.required]),
      'username':new FormControl(null,[Validators.required]),
      'email': new FormControl(null,[Validators.email,Validators.required]),
      'password': new FormControl(null,[Validators.required]),
      
      'city':new FormControl(null,[Validators.required]),
      'street':new FormControl(null,[Validators.required]),
      'number':new FormControl(null,[Validators.required]),
      'zipcode':new FormControl(null,[Validators.required]),
      'lat':new FormControl(null,[Validators.required]),
      'long':new FormControl(null,[Validators.required]),

      'phone':new FormControl(null,[Validators.required,Validators.maxLength(12)])

    });
  }
  getdata(signindata:any){
    this.storeData={
      email:signindata.value.email,
      username:signindata.value.username,
      password:signindata.value.password,
      name:{
        firstname:signindata.value.firstname,
        lastname:signindata.value.lastname
      },
      address:{
        city:signindata.value.city,
        street:signindata.value.street,
        number:signindata.value.number,
        zipcode:signindata.value.zipcode,
        geolocation:{
          lat:signindata.value.lat,
          long:signindata.value.long
        }
      },
      phone:signindata.value.phone
    }
    this._AuthService.addUser(this.storeData).subscribe(data=>{
      this._AuthService.saveDataUser(data,this.storeData.username);
      this.Router.navigate(['/Login'])
    })}}
