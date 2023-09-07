import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from './services/products/products.service';
import { ConfigService } from './services/httpconfig/config.service';
import { Products } from './shared/models/Food';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit { 
  products: Products[] = [];
  mapProducts: Products[] = [];
  constructor(private productService: ProductsService, private apiEndPoint: ConfigService){}
  ngOnInit(): void {
    this.apiEndPoint.get('https://jsonplaceholder.typicode.com/comments').subscribe((data: Products[]) => {
      this.products = data;
    })
  }
}
