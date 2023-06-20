import { Component, OnInit } from '@angular/core';
import {IngoProductsService} from '../info-products.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  SaleItems:any[]=[];
  BestSeller:any[]=[];
  apiProduct:any=[];
  constructor(private _IngoProductsService:IngoProductsService) { 


    this._IngoProductsService.getProductsAsos().subscribe(data=>{

      if("apiProductHome" in localStorage){
      
        this.apiProduct=JSON.parse(localStorage.getItem("apiProductHome")!)
      
      }
      else{
        this.apiProduct.push(data);
        localStorage.setItem("apiProductHome" ,JSON.stringify(this.apiProduct));
       
      }


      for(let i=0;i<12;i++){
        this.SaleItems.push(this.apiProduct[0].products[i])
      }

      for(let i=15;i<27;i++){
        this.BestSeller.push(this.apiProduct[0].products[i])
      }
      console.log(this.apiProduct[0])
    });
  }

  ngOnInit(): void {
  }

      

}
