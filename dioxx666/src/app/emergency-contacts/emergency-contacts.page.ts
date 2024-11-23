import { Component } from '@angular/core';
// Dependiendo de cómo implementes la llamada, puedes usar un plugin de Cordova o Capacitor

@Component({
  selector: 'app-emergency-contacts',
  templateUrl: './emergency-contacts.page.html',
  styleUrls: ['./emergency-contacts.page.scss'],
})
export class EmergencyContactsPage {
  emergencyContacts = [
    { name: 'Contacto 1', phone: '123456789' },
    { name: 'Contacto 2', phone: '987654321' }
  ];

  constructor() {}

  // Función para hacer una llamada al contacto
  callContact(phone: string) {
    // Aquí deberías integrar la funcionalidad para realizar la llamada
    // En dispositivos móviles, podrías usar un plugin de Capacitor o Cordova
    window.open(`tel:${phone}`, '_system');
  }

  // Función para añadir un nuevo contacto (puedes implementar la lógica para agregar contactos)
  addContact() {
    // Lógica para agregar un nuevo contacto (ejemplo estático)
    const newContact = { name: 'Nuevo Contacto', phone: '555555555' };
    this.emergencyContacts.push(newContact);
  }
}
