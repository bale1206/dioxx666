import { Component } from '@angular/core';
import { Medication } from './models'; // Asegúrate de importar correctamente

@Component({
  selector: 'app-medications',
  templateUrl: './medications.page.html',
  styleUrls: ['./medications.page.scss'],
})
export class MedicationsPage {
  medications: Medication[] = [
    { name: 'Medicamento A', dose: '1 tableta' },
    { name: 'Medicamento B', dose: '2 tabletas' }
  ];

  constructor() {}

  addMedication() {
    const newMedication: Medication = { name: 'Nuevo Medicamento', dose: '1 tableta' };
    this.medications.push(newMedication);
  }

  editMedication(medication: Medication) {
    console.log('Editando:', medication);
  }
}
