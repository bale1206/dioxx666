import { Component } from '@angular/core';

@Component({
  selector: 'app-outings',
  templateUrl: './outings.page.html',
  styleUrls: ['./outings.page.scss'],
})
export class OutingsPage {
  // Ejemplo de datos de salidas
  outings = [
    {
      residentName: 'Carlos López',
      origin: 'Hogar de Reposo',
      destination: 'Hospital Central',
      date: '2024-11-25',
      details: 'Cita médica programada a las 10:00 AM.',
    },
    {
      residentName: 'María González',
      origin: 'Hogar de Reposo',
      destination: 'Casa de un familiar',
      date: '2024-11-26',
      details: 'Visita familiar aprobada por el director.',
    },
    {
      residentName: 'Jorge Ramírez',
      origin: 'Hogar de Reposo',
      destination: 'Parque Central',
      date: '2024-11-27',
      details: 'Salida recreativa supervisada.',
    },
  ];

  viewDetails(outing: any) {
    alert(
      `Detalles de la salida:\n` +
        `Residente: ${outing.residentName}\n` +
        `Origen: ${outing.origin}\n` +
        `Destino: ${outing.destination}\n` +
        `Fecha: ${outing.date}\n` +
        `Descripción: ${outing.details}`
    );
  }
}
