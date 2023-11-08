import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {


  let _router = inject(Router)
  let IsloggedId = localStorage.getItem('IsloggedIn')
  if (IsloggedId == 'false') {
    _router.navigate(['/loginpage'])
    alert("authenticate user first")
    return false
  }
  
    return true;  
};