import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import Swal from 'sweetalert2';

export const authGuard: CanActivateFn = (route, state) => {


  let _router = inject(Router)
  let IsloggedId = localStorage.getItem('isloggedin')
  if (IsloggedId == 'false') {
    _router.navigate(['/loginpage'])
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Please Login to access the page'})
        return false
  }
  return true;  
};