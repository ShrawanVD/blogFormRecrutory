import { CanActivateFn } from '@angular/router';
import { BlogsService } from '../services/blogs.service';


export const authguardGuard: CanActivateFn = (route, state) => {
  return true;
};
