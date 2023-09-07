import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private cookies: CookieService, private routes: Router) { }

  isLoggedIn():boolean{
    return !!this.cookies.get('accessToken');
  }

  navigateToLogin(): void{
    this.routes.navigateByUrl('/signin');
  }
}
