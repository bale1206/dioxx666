import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ShiftsPageRoutingModule } from './shifts-routing.module';
import { ShiftsPage } from './shifts.page';
import { FullCalendarModule } from '@fullcalendar/angular'; // Importa FullCalendar

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShiftsPageRoutingModule,
    FullCalendarModule // Incluye el módulo
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [ShiftsPage]
})
export class ShiftsPageModule {}
