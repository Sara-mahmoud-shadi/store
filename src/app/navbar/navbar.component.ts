import { Component, OnInit } from '@angular/core';
import{IngoProductsService} from '../info-products.service'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  show:boolean=false;
  lencart:number=0;
  constructor(private _IngoProductsService:IngoProductsService) { 
   
  }

  ngOnInit(): void {
  }


}
