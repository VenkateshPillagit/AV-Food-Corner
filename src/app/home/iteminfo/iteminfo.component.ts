import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';
import { RatingModule } from 'ngx-bootstrap/rating';
import { CartService } from 'src/app/services/cart/cart.service';
import { FoodService } from 'src/app/services/food/food.service';
import { Foods } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-iteminfo',
  templateUrl: './iteminfo.component.html',
  styleUrls: ['./iteminfo.component.css'],
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    RatingModule,
    FormsModule,
    CommonModule,
  ],
})
export class IteminfoComponent implements OnInit {
  addToCart: boolean = false;
  food: Foods = {
    id: 0,
    name: '',
    price: 0,
    cookTime: '',
    favorite: false,
    origins: [],
    stars: 4,
    imageUrl: '',
    tags: [],
  };
  rate: number = 3;
  constructor(private route: ActivatedRoute, private routes: Router, private foodService: FoodService, private cartService: CartService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.food = this.foodService.getFoodById(params['id']);
      }
    });
    if (this.cartService.getItemsInCart().find((items) => items.id === this.food.id)) {
      this.addToCart = true;
    }
  }

  addItemToCart(itemInfo: Foods) {
    this.cartService.addToCart(itemInfo);
    this.addToCart = true;
  }

  checkOutToCartPage(){
    this.routes.navigateByUrl('products/cart');
  }
}
