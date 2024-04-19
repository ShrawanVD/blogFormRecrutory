import { inject } from '@angular/core';

import { CanActivateFn, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {

  const login = true;

  if (login) {
    
    return true;
  } else {
    // handle logic for redirecting it to the login page -0=-0-i0-i-090-9-=00-90-90--0=
    return false;
  }

};





