import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { switchMap, take, map, tap } from 'rxjs/operators';
import { CarService } from './car.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private router: Router,
    private service: CarService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    return this.auth.user$.pipe(
      take(1),
      map(user => !!user), // <-- map to boolean ,same as user !== null
      tap(loggedIn => {
        if (!loggedIn) {
          this.service.showSnackbar(
            'Access Denied ,Please log in',
            'Access Denied'
          );
        }
      })
    );
  }
}
