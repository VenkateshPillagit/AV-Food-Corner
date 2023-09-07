import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/Food';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartInfo: Foods[] = [];
  constructor() { }

  getItemsInCart(): Foods[] {
    return this.cartInfo;
  };

  addToCart(itemInfo: Foods){
    this.cartInfo.push(itemInfo);
  }
}
