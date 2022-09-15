import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http'
import { Observable ,BehaviorSubject} from 'rxjs';
import{U_data} from './userData'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  storedata:any=new BehaviorSubject(null);
  
  constructor(private _HttpClient:HttpClient) { }

  addUser(data:any):Observable<any>{
    return this._HttpClient.post('https://fakestoreapi.com/users',data);
  }
  saveDataUser(data:number,username:string){
    let user=new U_data(data,username);
    this.storedata.next(user);
  }

 
}
