import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OutingsPage } from './outings.page';

const routes: Routes = [
  {
    path: '',
    component: OutingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OutingsPageRoutingModule {}
