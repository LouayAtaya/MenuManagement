import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanDeactivateGuard } from '../core/guard/can-deactivate.guard';
import { AboutUsComponent, HomeComponent, MainComponent, SettingsComponent } from './pages';

const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      {path:'', redirectTo:'home', pathMatch:'full'},
      { path: 'home', component: HomeComponent , canDeactivate:[CanDeactivateGuard]},
      { path: 'settings', component: SettingsComponent },
      { path: 'aboutus', component: AboutUsComponent },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
