import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/Food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getFoodById(id: number): Foods{
    return this.getAllImages().find((food) => food.id == id)!;
  };
  getAllImages(): Foods[]{
    return [
      {
        id: 1,
        name: 'Food1',
        price: 78,
        cookTime: '40-50',
        favorite: true,
        origins: ['india'],
        stars: 4,
        imageUrl: 'https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png',
        tags: ['FastFood, Lunch']
      },
      {
        id: 2,
        name: 'Food2',
        price: 100,
        cookTime: '40-50',
        favorite: true,
        origins: ['india'],
        stars: 3,
        imageUrl: '../../../assets/food-2.jpg',
        tags: ['FastFood, Lunch']
      },
      {
        id: 3,
        name: 'Food3',
        price:  55,
        cookTime: '40-50',
        favorite: true,
        origins: ['india'],
        stars: 5,
        imageUrl: '../../../assets/food-3.jpg',
        tags: ['FastFood, Lunch']
      },
      {
        id: 4,
        name: 'Food4',
        price: 45,
        cookTime: '40-50',
        favorite: true,
        origins: ['india'],
        stars: 2,
        imageUrl: '../../../assets/food-4.jpg',
        tags: ['FastFood, Lunch']
      },
      {
        id: 5,
        name: 'Food5',
        price: 39,
        cookTime: '40-50',
        favorite: true,
        origins: ['india'],
        stars: 4,
        imageUrl: '../../../assets/food-5.jpg',
        tags: ['FastFood, Lunch']
      },
      {
        id: 6,
        name: 'Food6',
        price: 67,
        cookTime: '40-50',
        favorite: true,
        origins: ['india'],
        stars: 4,
        imageUrl: '../../../assets/food-6.jpg',
        tags: ['FastFood, Lunch']
      },
      {
        id: 7,
        name: 'Food7',
        price: 34,
        cookTime: '10-30',
        favorite: true,
        origins: ['india'],
        stars: 4,
        imageUrl: '../../../assets/food-7.jpg',
        tags: ['FastFood, Lunch']
      },
      {
        id: 8,
        name: 'Food3',
        price: 23,
        cookTime: '30-50',
        favorite: true,
        origins: ['india'],
        stars: 3,
        imageUrl: '../../../assets/food-8.jpg',
        tags: ['FastFood, Lunch']
      },
    ]
  }
}
