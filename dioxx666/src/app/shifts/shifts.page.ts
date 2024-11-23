import { Component } from '@angular/core';

@Component({
  selector: 'app-shifts',
  templateUrl: './shifts.page.html',
  styleUrls: ['./shifts.page.scss'],
})
export class ShiftsPage {
  // Ejemplo de turnos (puedes reemplazar con datos de tu API o base de datos)
  shifts = [
    {
      employeeName: 'Juan Pérez',
      shiftTime: 'Matutino (08:00 - 14:00)',
      date: '2024-11-25',
      details: 'Responsable del ala norte.',
    },
    {
      employeeName: 'Ana Gómez',
      shiftTime: 'Vespertino (14:00 - 20:00)',
      date: '2024-11-25',
      details: 'Supervisora del ala sur.',
    },
    {
      employeeName: 'Luis Martínez',
      shiftTime: 'Nocturno (20:00 - 08:00)',
      date: '2024-11-25',
      details: 'Encargado de emergencias nocturnas.',
    },
  ];

  viewDetails(shift: any) {
    alert(
      `Detalles del turno:\n` +
        `Empleado: ${shift.employeeName}\n` +
        `Horario: ${shift.shiftTime}\n` +
        `Fecha: ${shift.date}\n` +
        `Descripción: ${shift.details}`
    );
  }
}
