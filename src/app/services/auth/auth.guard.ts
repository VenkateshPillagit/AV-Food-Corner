import { CanActivateFn } from '@angular/router';
import { inject, Injectable } from '@angular/core'
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService: AuthService = inject(AuthService);
  if (authService.isLoggedIn()) {
    return true;
  }
  authService.navigateToLogin();
  return false;
};
