import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentHeaderService } from '.';
import { ConfirmationService } from 'primeng/api';
import { CanDeactivateGuard } from './guard/can-deactivate.guard';
import { MenusManagementService } from './services/menus-management.service';




@NgModule({
  declarations: [],
  providers:[
    ContentHeaderService,CanDeactivateGuard,ConfirmationService,MenusManagementService
  ],
  imports: [
    CommonModule,
    
    
  ]
})
export class CoreModule { }
