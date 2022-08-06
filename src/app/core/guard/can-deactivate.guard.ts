import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { Observable, Observer } from 'rxjs';
import { HomeComponent } from '../../main/pages/home/home.component';

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<HomeComponent> {

  constructor(private confirmationService:ConfirmationService){

  }

  canDeactivate(component: HomeComponent): boolean {
   
    if (!component.menusUpdated) {
      return true;
    }

    return Observable.create((observer: Observer<boolean>) => {
      this.confirmationService.confirm({
          message: "هل انت متأكد من الخروج قبل حفظ التغييرات؟",
          accept: () => {
              observer.next(true);
              observer.complete();
          },
          reject: () => {
              observer.next(false);
              observer.complete();
          }
      });
    });
  
  }
  
  
}
