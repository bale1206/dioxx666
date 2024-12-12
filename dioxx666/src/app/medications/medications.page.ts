import { Component } from '@angular/core';
import { Medication } from './models'; // Asegúrate de importar correctamente

@Component({
  selector: 'app-medications',
  templateUrl: './medications.page.html',
  styleUrls: ['./medications.page.scss'],
})
export class MedicationsPage {
  medications: Medication[] = [
    { name: 'Medicamento A', dose: '1 tableta', schedule: '08:00 AM', resident: 'Juan Pérez' },
    { name: 'Medicamento B', dose: '2 tabletas', schedule: '02:00 PM', resident: 'Ana Gómez' }
  ];

  constructor() {}

  addMedication() {
    const newMedication: Medication = { name: 'Nuevo Medicamento', dose: '1 tableta', schedule: '10:00 AM', resident: 'Carlos López' };
    this.medications.push(newMedication);
  }

  editMedication(medication: Medication) {
    console.log('Editando:', medication);
  }
}
