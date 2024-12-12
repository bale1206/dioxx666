import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Medication } from '../medications/models';

@Component({
  selector: 'app-medication-edit-modal',
  templateUrl: './medication-edit-modal.component.html',
  styleUrls: ['./medication-edit-modal.component.scss'],
})
export class MedicationEditModalComponent {
  @Input() medication!: Medication; // Recibir el medicamento a editar

  constructor(private modalController: ModalController) {}

  dismiss() {
    this.modalController.dismiss(); // Cerrar sin cambios
  }

  save() {
    this.modalController.dismiss(this.medication); // Cerrar y devolver el medicamento editado
  }
}
