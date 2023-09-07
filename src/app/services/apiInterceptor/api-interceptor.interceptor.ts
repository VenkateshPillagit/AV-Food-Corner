import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class ApiInterceptorInterceptor implements HttpInterceptor {

  constructor(private cookies: CookieService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const accessToken = this.cookies.get('accessToken');
    let newReq: HttpRequest<unknown> = request;
    if (accessToken) {
       newReq = request.clone({
        headers: request.headers.set('Autherization', 'bearer '+accessToken),
      })
    }
    return next.handle(newReq);
  }
}
