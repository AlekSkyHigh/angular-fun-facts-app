import { CanActivateFn } from '@angular/router';

export const onlyForGuestGuard: CanActivateFn = (route, state) => {
  return true;
};
