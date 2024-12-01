import { NotfoundComponent } from './pages/notfound/notfound.component';
import { ProductsComponent } from './pages/products/products.component';
import { HomeComponent } from './pages/home/home.component';
import { Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductComponent } from './pages/product/product.component';

export const routes: Routes = [

  {path:'',component:HomeComponent},
{path:'products',component:ProductsComponent},
{path:'contact',component:ContactComponent},
{path:'login',component:LoginComponent},
{path:'product/:id',component:ProductComponent}
];
