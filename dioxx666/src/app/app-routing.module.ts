import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'medications',
    loadChildren: () => import('./medications/medications.module').then( m => m.MedicationsPageModule)
  },
  {
    path: 'outings',
    loadChildren: () => import('./outings/outings.module').then( m => m.OutingsPageModule)
  },
  {
    path: 'emergency-contacts',
    loadChildren: () => import('./emergency-contacts/emergency-contacts.module').then( m => m.EmergencyContactsPageModule)
  },
  {
    path: 'health-tracking',
    loadChildren: () => import('./health-tracking/health-tracking.module').then( m => m.HealthTrackingPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'shifts',
    loadChildren: () => import('./shifts/shifts.module').then( m => m.ShiftsPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
