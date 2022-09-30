import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { SnackbarService } from './snackbar.service';
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService {

  constructor(
    private auth:AuthService,
    public router:Router,
    private snackbarService:SnackbarService
  ) { }
    // canActive(route:ActivatedRouteSnapshot):boolean {
    //   let expectedRoleArray = route.data;
    //   expectedRoleArray= expectedRoleArray.expectedRole;

    //   const token:any = localStorage.getItem('token');
    //   var tokenPayload:any;
    //   try {
    //     tokenPayload = jwt_decode(token);
    //   } catch (error) {
    //     localStorage.clear();
    //     this.router.navigate(['/']);
    //   }
    //   let checkRole = false;
    //   for(let i=0;i< expectedRoleArray.length;i++){

    //   }
    // }
}
