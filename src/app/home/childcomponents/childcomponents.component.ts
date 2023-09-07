import { Component, Input } from '@angular/core';
import { Products } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-childcomponents',
  templateUrl: './childcomponents.component.html',
  styleUrls: ['./childcomponents.component.css']
})
export class ChildcomponentsComponent {
  @Input()
  products: Products[] = [];
}
