import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './layout/footer/footer.component';
import { MainHeaderComponent } from './layout/main-header/main-header.component';
import { MainSidebarComponent } from './layout/main-sidebar/main-sidebar.component';
import { ContentHeaderComponent } from './layout/content-header/content-header.component';
import { NotFoundComponent } from './layout/not-found/not-found.component';
import { UnAuthorizedComponent } from './layout/un-authorized/un-authorized.component';
import { PreLoaderComponent } from './layout/pre-loader/pre-loader.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LoadingIndicatorComponent } from './layout/loading-indicator/loading-indicator.component';
import {TreeModule} from 'primeng/tree';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {InputTextModule} from 'primeng/inputtext';
import {ToastModule} from 'primeng/toast';
import {ContextMenuModule} from 'primeng/contextmenu';
import { SubMenuItemsComponent } from './layout/sub-menu-items/sub-menu-items.component';
import { CustomRouterLinkDirective } from './directives/custom-router-link.directive';

@NgModule({
  declarations: [
    FooterComponent,
    MainHeaderComponent,
    MainSidebarComponent,
    ContentHeaderComponent,
    NotFoundComponent,
    UnAuthorizedComponent,
    PreLoaderComponent,
    LoadingIndicatorComponent,
    SubMenuItemsComponent,
    CustomRouterLinkDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    TreeModule,
    ConfirmDialogModule,
    DialogModule,
    ButtonModule,
    DynamicDialogModule,
    InputTextModule,
    ToastModule,
    ContextMenuModule,
  ],
  
  exports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    FooterComponent,
    MainHeaderComponent,
    MainSidebarComponent,
    ContentHeaderComponent,
    NotFoundComponent,
    UnAuthorizedComponent,
    PreLoaderComponent,
    LoadingIndicatorComponent,
    TreeModule,
    ConfirmDialogModule,
    DialogModule,
    ButtonModule,
    DynamicDialogModule,
    InputTextModule,
    ToastModule,
    ContextMenuModule,
  ]
})
export class SharedModule { }
