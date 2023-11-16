import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {


  let _router = inject(Router)
  let IsloggedId = localStorage.getItem('isloggedin')
  if (IsloggedId == 'false') {
    _router.navigate(['/loginpage'])
    alert("contact Support")
    return false
  }
  return true;  
};