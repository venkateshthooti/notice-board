import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CreateComponent } from './create/create.component';

@Injectable({
  providedIn: 'root'
})
export class CandeactivateGuard implements CanDeactivate<unknown> {
  
  canDeactivate(
    component: CreateComponent
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // Check if the form is valid
    if (component.form.valid) {
     return confirm("You may lose unsaved data. Do you want to leave?");
     
   // Allow navigation
    } else {
      // Show a confirmation dialog
      return confirm("You may lose unsaved data. Do you want to leave?");
    }
  }
}
