import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './home/main/main.component';
import { IteminfoComponent } from './home/iteminfo/iteminfo.component';
import { CartinfoComponent } from './home/cartinfo/cartinfo.component';
import { BuymessageComponent } from './home/buymessage/buymessage.component';
import { SigninComponent } from './home/signin/signin.component';
import { authGuard } from './services/auth/auth.guard';
import { ProductsComponent } from './home/products/products.component';

// const routes: Routes = [
//   { path: 'products', component: MainComponent, canActivate: [authGuard]},
//   { path: 'signin', component: SigninComponent},
//   { path: 'products/search/:searchValue', component: MainComponent},
//   { path: 'food/:id', component: IteminfoComponent},
//   { path: 'cart', component: CartinfoComponent},
//   { path: 'buy', component: BuymessageComponent},
//   { path: '', component: SigninComponent},
//   { path: '**', component: SigninComponent},
// ]
const routes: Routes = [
  {
    path: 'products', component: MainComponent, canActivate: [authGuard],
    children: [
      { path: '', component: ProductsComponent },
      { path: 'search/:searchValue', component: ProductsComponent },
      { path: 'food/:id', component: IteminfoComponent },
      { path: 'cart', component: CartinfoComponent },
      { path: 'buy', component: BuymessageComponent },
    ]
  },
  { path: 'signin', component: SigninComponent },
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  { path: '**', redirectTo: 'signin', pathMatch: 'full' },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
