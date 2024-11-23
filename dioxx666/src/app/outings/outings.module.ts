import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OutingsPageRoutingModule } from './outings-routing.module';

import { OutingsPage } from './outings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OutingsPageRoutingModule
  ],
  declarations: [OutingsPage]
})
export class OutingsPageModule {}
