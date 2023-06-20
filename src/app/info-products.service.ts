import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngoProductsService {

  
  constructor(private _HttpClient:HttpClient) {
   
   }

  getProducts():Observable<any>{
    return this._HttpClient.get('https://fakestoreapi.com/products')
  }

  getProductsAsos():Observable<any>{
    
  
    let headers =new HttpHeaders().set('X-RapidAPI-Key','d9b4df9bdbmsh3dd1c75ebd1d444p1f9867jsn68f4d8e5c941')
    .set('X-RapidAPI-Host','asos2.p.rapidapi.com');
    let url='https://asos2.p.rapidapi.com/products/v2/list';
    return this._HttpClient.get(url,{headers,params: {
      store: 'US',
      offset: '0',
      categoryId: '4208',
      limit: '48',
      country: 'US',
      sort: 'freshness',
      currency: 'USD',
      sizeSchema: 'US',
      lang: 'en-US'
    }});


  }
  getCategory():Observable<any>{
    return this._HttpClient.get('https://fakestoreapi.com/products/categories');
  }
  getSingleCategory(data:string):Observable<any>{
    return this._HttpClient.get(`https://fakestoreapi.com/products/category/${data}`)
  }
  getSingleproduct(data:string):Observable<any>{
    return this._HttpClient.get(`https://fakestoreapi.com/products/${data}`)
  }
  save_order(model:any){
    return this._HttpClient.post( `https://fakestoreapi.com/carts`,model);
  }

}
