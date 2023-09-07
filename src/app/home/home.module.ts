import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { SearchComponent } from './search/search.component';
import { IteminfoComponent } from './iteminfo/iteminfo.component';
import { CartinfoComponent } from './cartinfo/cartinfo.component';
import { BuymessageComponent } from './buymessage/buymessage.component';
import { SigninComponent } from './signin/signin.component';
import { ProductsComponent } from './products/products.component';
import { ProductsService } from '../services/products/products.service';
import { ChildcomponentsComponent } from './childcomponents/childcomponents.component';

@NgModule({
  declarations: [  
    ChildcomponentsComponent
  ],
  imports: [
    CommonModule,
    HeaderComponent,
    MainComponent,
    SearchComponent,
    IteminfoComponent,
    CartinfoComponent,
    BuymessageComponent,
    SigninComponent,
    ProductsComponent,
  ],
  providers: [ProductsService],
  exports: [
    HeaderComponent,
    ChildcomponentsComponent,
  ]
})
export class HomeModule { }
