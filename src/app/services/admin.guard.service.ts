import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { ApiServiceService } from './api-service.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard {
  constructor( private router: Router ,private serv:ApiServiceService){
   
  };
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): any {
      console.log('CanActivate admin called');
      if (!this.serv.isAuth()){
        this.router.navigateByUrl('home')
        return false
      } 
      
      
     
    }
}


