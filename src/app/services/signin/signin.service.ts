import { Injectable, OnInit } from '@angular/core';
import { ConfigService } from '../httpconfig/config.service';
import { CookieService } from 'ngx-cookie-service';
import { lastValueFrom } from 'rxjs';

interface UserInfo {
  email: string,
  password: string,
}
type Token = {
  accessToken: string,
}

@Injectable({
  providedIn: 'root'
})
export class SigninService implements OnInit {
  signinUrl: string = 'http://localhost:5000/signin';
  otpUrl: string = 'http://localhost:5000/otp/generate';
  constructor(private api: ConfigService, private cookies: CookieService) { }

  ngOnInit(): void {
    // this.login()
  }

  async login(userInfo: UserInfo): Promise<any> {
    let isLoginSuccess: boolean = false;
    try {
      this.cookies.delete('accessToken');
      // with observables
      // this.api.post(this.signinUrl, { email: userInfo.email, password: userInfo.password })
      //   .subscribe(data => {
      //     const { accessToken } = data as Token;
      //     const time = new Date(new Date().getTime() + 2 * 60 * 1000)
      //     if (accessToken) {
      //       this.cookies.set('accessToken', accessToken, time);
      //       // this.generateOTP();
      //     }
      //   });

      //with promise
      const response = await this.signInPromise(userInfo);
      if (response) {
        const { accessToken } = response as Token;
        const time = new Date(new Date().getTime() + 2 * 60 * 1000)
        if (accessToken) {
          this.cookies.set('accessToken', accessToken, time);
          isLoginSuccess = true;
        }
      }
    } catch (error) {
      console.log('error while signin', error);
    }
    return isLoginSuccess;
  }

  generateOTP(userInfo: UserInfo): boolean {
    let isOTPgenerated: boolean = false;
    this.api.post(this.otpUrl, { email: userInfo.email, password: userInfo.password }).subscribe((otpInfo) => {
      if (otpInfo.isOtpSent) {
        isOTPgenerated = true;
      }
    });
    return isOTPgenerated;
  }

  signInPromise(userInfo: UserInfo): Promise<any> {
    let promise = new Promise((resolve, reject) => {
      lastValueFrom(this.api.post(this.signinUrl, { email: userInfo.email, password: userInfo.password }))
        .then((res) => resolve(res))
        .catch((error) => reject(error))
    })
    return promise;
  }
}
