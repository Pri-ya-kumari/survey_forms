import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import Swal from 'sweetalert2';

export const adminguardGuard: CanActivateFn = (route, state) => {
  let _router = inject(Router)
  let IsadminId = localStorage.getItem('isadminin')
  if (IsadminId == 'false') {
    _router.navigate(['/adminlogin'])
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Please Login As Admin To Access The Page'})
        return false
  }
  return true;  
};
