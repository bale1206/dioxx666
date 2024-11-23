import { Component } from '@angular/core';
import { HealthRecord } from './models'; // Asegúrate de importar correctamente

@Component({
  selector: 'app-health-tracking',
  templateUrl: './health-tracking.page.html',
  styleUrls: ['./health-tracking.page.scss'],
})
export class HealthTrackingPage {
  healthRecords: HealthRecord[] = [
    { date: '2024-10-01', temperature: 36.5, bloodPressure: '120/80' },
    { date: '2024-10-02', temperature: 37.0, bloodPressure: '118/76' }
  ];

  constructor() {}

  addRecord() {
    const newRecord: HealthRecord = { date: '2024-10-03', temperature: 36.8, bloodPressure: '115/75' };
    this.healthRecords.push(newRecord);
  }

  editRecord(record: HealthRecord) {
    console.log('Editando registro:', record);
  }
}
