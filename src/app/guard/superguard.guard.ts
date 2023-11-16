import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import Swal from 'sweetalert2';

export const superguardGuard: CanActivateFn = (route, state) => {
  let _router = inject(Router)
  let IssuperadminId = localStorage.getItem('issuperadminin')
  if (IssuperadminId == 'false') {
    _router.navigate(['/superadminLogin'])
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Please Login As Super Admin To Access Those Pages'})
        return false
  }
  return true;  
};