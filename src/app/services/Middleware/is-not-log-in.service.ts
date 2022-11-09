import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {AuthenticationService} from "../authentication.service";

@Injectable({
  providedIn: 'root'
})
export class IsNotLogInService implements CanActivate{

  constructor(private auth: AuthenticationService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(!this.auth.userValue){
      return true;
    } else {
      this.router.navigate(['/admin/dashboard']);
      return false;
    }
  }
}
