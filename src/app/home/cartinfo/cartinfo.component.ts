import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart/cart.service';
import { Foods } from 'src/app/shared/models/Food';

interface keyable {
  [key: string]: any,
}

@Component({
  selector: 'app-cartinfo',
  templateUrl: './cartinfo.component.html',
  styleUrls: ['./cartinfo.component.css'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule],
})
export class CartinfoComponent implements OnInit {
  cartItems: Foods[] = [
  ];
  addItems: keyable = {};
  totalPrice: number = 0;
  constructor(private cartService: CartService, private routes: Router) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getItemsInCart();
    this.cartItems.forEach((item) => {
      this.addItems[item.id] = 1;
      this.totalPrice = this.totalPrice + item.price;
    })
    if (this.cartItems.length === 0) {
      // this.routes.navigateByUrl('products');
    }
  }

  addItemsCount(event: HTMLButtonElement) {
    const id = event['id'];
    if (this.addItems[id] < 10) {
      const selectedItem = this.cartItems.find((item) => item.id == <number><unknown>id);
      this.addItems[id] = this.addItems[id] + 1;
      if (selectedItem !== undefined) {
        this.totalPrice = this.totalPrice + selectedItem.price;
      }
    }
  };

  removeItemsCount(event: HTMLButtonElement) {
    const id = event['id'];
    if (this.addItems[id] > 0) {
      const selectedItem = this.cartItems.find((item) => item.id == <number><unknown>id);
      this.addItems[id] = this.addItems[id] - 1;
      if (selectedItem !== undefined) {
        this.totalPrice = this.totalPrice + selectedItem.price;
      }
    }
  }

  removeItemFromCart(removeItem: Foods) {
    const index = this.cartItems.findIndex((object) => object.id === removeItem.id);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
    if (this.cartItems.length === 0) {
      // this.routes.navigateByUrl('main');
    }
  }

  navigateToBuy() {
    this.routes.navigateByUrl('products/buy');
  }
}
