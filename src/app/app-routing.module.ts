import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ShopComponent } from './shop/shop.component';
import { TesComponent } from './tes/tes.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {
    path:'productDetail/:id',component:ProductDetailComponent
  },
  {
    path:'home',component:HomeComponent
  },{path:'cart',component:CartComponent},
  {path:'shop',component:ShopComponent},
  {path:'contactUs',component:ContactComponent},
  {path:'Register',component:TesComponent},
  {path:'Login',component:LoginComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
