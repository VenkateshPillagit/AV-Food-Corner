import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  standalone: true,
  imports: [MatIconModule, FormsModule, CommonModule],
})
export class SearchComponent implements OnInit {
  @Output() emitterSearchValue = new EventEmitter(); 
  searchValue: string = '';
  constructor(private routes: Router, private router: ActivatedRoute){}
  onClear(){
    this.searchValue = '';
    this.routes.navigateByUrl('/products');
  }

  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      if (params['searchValue']) {
        this.searchValue = params['searchValue'];
      };
    });
  }

  onSearch(): void{
    this.emitterSearchValue.emit(this.searchValue);
    if (this.searchValue) {
      this.routes.navigateByUrl('/products/search/'+this.searchValue);
    }
  }

  onChange(search: HTMLInputElement): void{
    this.searchValue = search.value;
  }

}
