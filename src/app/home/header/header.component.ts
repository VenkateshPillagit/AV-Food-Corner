import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RatingModule } from 'ngx-bootstrap/rating';
import { ActivatedRoute, Router } from '@angular/router';
import { SigninService } from 'src/app/services/signin/signin.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
})
export class HeaderComponent {
  rate: number = 4;
  constructor(private routes: Router, private signinService: SigninService, private route: ActivatedRoute) { }
  navigateToHome() {
    this.routes.navigateByUrl('products/cart');
    // this.routes.navigate(['products/cart'], { relativeTo: this.route})
  }
}
