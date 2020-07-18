import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree ,Router} from '@angular/router';
import { Observable } from 'rxjs';
import { RequestService } from '../services/RequestService';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  helper;
  constructor(private request:RequestService, private router:Router,public jwtHelper: JwtHelperService){
    this.helper = new JwtHelperService(); 
  }

  canActivate(){
    if(this.request.isLoggedIn()){

      const decodedToken = this.helper.decodeToken(localStorage.getItem('tokenID'));
<<<<<<< HEAD
      if(decodedToken.token.role==="User"){
        return true;
      }
      else{        
        this.router.navigate(['/admin']);
        return false;
=======
      if(decodedToken.token.role==="SU"||decodedToken.token.role==="BOM"||decodedToken.token.role==="BOP"){
        this.router.navigate(['/admin']);
      }
      else{        
        return true;
>>>>>>> 0c8d70f019b46d7b1181dab50c1779fdcbffb485
      }  
      
    }
    else{
      this.router.navigate(['/signin']);
      return false;
    }

  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  
}
