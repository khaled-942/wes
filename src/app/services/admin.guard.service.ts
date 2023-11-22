import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard {

  constructor( private router: Router){};
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): any {
      console.log('CanActivate admin called');
      
        this.router.navigateByUrl('register')
        return false
      
      
     
    }
}


