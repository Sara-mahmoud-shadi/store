import { Component, OnInit } from '@angular/core';
import{IngoProductsService} from '../info-products.service';
import{AuthService} from '../auth.service';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  term:string='';
  allProducts:any=[]
  allCtegories:any=[]
  add:any[]=[];
  cartProduct:any[]=[];
  islogin:boolean=false;

  amount:number=0;
  constructor(private _IngoProductsService:IngoProductsService,private _AuthService:AuthService) { 

    this.getproduct();

    this._IngoProductsService.getCategory().subscribe(data=>{
      this.allCtegories=data;
     
    });

    this._AuthService.storedata.subscribe((data:any)=>{
      (data) ? this.islogin=true : this.islogin=false
    })
 
  }

  ngOnInit(): void {
  }
  getproduct(){
    this._IngoProductsService.getProducts().subscribe(data=>{
     
      this.allProducts=data
    });
  }
  getValueCategory(value:any){

    if(value.target.value=='all'){this.getproduct();}
    else{
    this._IngoProductsService.getSingleCategory(value.target.value).subscribe(data=>{
    this.allProducts=data
    })}}

  addCart(data:any){
    if("cart" in localStorage){
      
      this.cartProduct=JSON.parse(localStorage.getItem("cart")!)
      let exist= this.cartProduct.find(item=>item.item.id==data.id)
      if(!exist){

        this.cartProduct.push({item:data,quantity:this.amount});
      localStorage.setItem("cart",JSON.stringify(this.cartProduct))
      }
      
    }
    else{
      this.cartProduct.push({item:data,quantity:this.amount});
      localStorage.setItem("cart",JSON.stringify(this.cartProduct));
     }
    this.amount=0;}}
