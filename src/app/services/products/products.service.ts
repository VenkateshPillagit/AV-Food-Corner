import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { ConfigService } from '../httpconfig/config.service';
import { Observable } from 'rxjs';
import { Products } from 'src/app/shared/models/Food';

@Injectable({
  providedIn: 'root'
})
export class ProductsService implements OnInit {
  products: Products[] | any = [];
  constructor(private httpClient: HttpClient, private apiEndPoint: ConfigService) { };
  ngOnInit(): void{
  }

  getAllProducts(){
    this.httpClient.get<Products>('https://jsonplaceholder.typicode.com/comments').subscribe((res) => {
      this.products = res;
    })
    this.apiEndPoint.get('https://jsonplaceholder.typicode.com/comments');
    return this.products;
  }
}
