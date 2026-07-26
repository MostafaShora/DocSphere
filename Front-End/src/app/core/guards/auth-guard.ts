import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const token = authService.getToken();
  if (!token) {
    router.navigate(['/auth/login']);
    return false;
  }

  try {
    const payload = token.split('.')[1];
    const decoded = JSON.parse(atob(payload.replace(/-/g, '+').replace(/_/g, '/')));
    const expiration = decoded?.exp;

    if (!expiration || Date.now() >= expiration * 1000) {
      localStorage.removeItem('authToken');
      localStorage.removeItem('currentUser');
      router.navigate(['/auth/login']);
      return false;
    }

    return true;
  } catch {
    localStorage.removeItem('authToken');
    localStorage.removeItem('currentUser');
    router.navigate(['/auth/login']);
    return false;
  }
};
