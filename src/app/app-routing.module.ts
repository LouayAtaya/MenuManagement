import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent, UnAuthorizedComponent } from './shared';

const routes: Routes = [
  {path: '',  loadChildren: () => import('./main').then(m => m.MainModule)},
  {path:"404",component:NotFoundComponent},
  {path:"401",component:UnAuthorizedComponent},
  {path:"**",redirectTo:'404', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
