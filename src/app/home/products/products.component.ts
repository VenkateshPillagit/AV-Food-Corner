import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'ngx-bootstrap/rating';
import { FoodService } from 'src/app/services/food/food.service';
import { ProductsService } from 'src/app/services/products/products.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { SearchComponent } from '../search/search.component';
import { Foods } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    RatingModule,
    FormsModule, 
    SearchComponent, 
    CommonModule,
    RouterModule,
  ],
})


export class ProductsComponent implements OnInit {
  foods: Foods[] = [];
  rating: number[] = [];
  max: number = 5;
  searchValue: string = '';
  constructor(private fs: FoodService, private prod: ProductsService, private router: ActivatedRoute, private routes: Router) { }
  ngOnInit(): void{
    this.foods = this.fs.getAllImages();
    // service called to display searched food item based on searchValue coming from child component
    // console.log('searchValue',this.searchValue);
    // if (this.searchValue) {
    //   this.foods = this.fs.getAllImages().filter((food) => food.name.toLocaleLowerCase().includes(this.searchValue.toLocaleLowerCase())) ;
    // }

    // service called to display searched food item based on url
    this.router.params.subscribe((params) => {
      if (params['searchValue']) {
        this.foods = this.fs.getAllImages().filter((food) => food.name.toLocaleLowerCase().includes(params['searchValue'].toLocaleLowerCase())) ;
      };
    });
  }

  onSelectProduct(){
    this.routes.navigateByUrl('products/iteminfo');
  }
}

