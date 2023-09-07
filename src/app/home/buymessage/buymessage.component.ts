import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-buymessage',
  templateUrl: './buymessage.component.html',
  styleUrls: ['./buymessage.component.css'],
  standalone: true,
  imports: [MatCardModule,MatIconModule, CommonModule]
})
export class BuymessageComponent {

}
