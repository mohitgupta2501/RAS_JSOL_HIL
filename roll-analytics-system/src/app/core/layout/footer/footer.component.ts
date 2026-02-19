import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Alarm {
  dateTime: string;
  description: string;
  parameter: string;
  severity: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit, OnDestroy {
  popupOpen = false;
  currentTime = '';
  private timeInterval: any;

  alarms: Alarm[] = [
    { dateTime: '13/02/2026 | 10:30 AM', description: 'High Temperature in Boiler', parameter: 'Temperature', severity: 'HIGH' },
    { dateTime: '13/02/2026 | 9:15 AM', description: 'Low Pressure in Turbine', parameter: 'Pressure', severity: 'LOW' },
    { dateTime: '12/02/2026 | 6:45 PM', description: 'Medium Flow Variation in Pipeline', parameter: 'Flow Rate', severity: 'MEDIUM' },
    { dateTime: '11/02/2026 | 1:10 PM', description: 'Overheating Detected in Motor', parameter: 'Temperature', severity: 'HIGH' },
    { dateTime: '10/02/2026 | 4:00 AM', description: 'Compressor Load Fluctuation', parameter: 'Load', severity: 'LOW' },
    { dateTime: '09/02/2026 | 11:20 AM', description: 'Voltage Spike in Main Panel', parameter: 'Voltage', severity: 'HIGH' }
  ];

  get highCount(): number {
    return this.alarms.filter(a => a.severity === 'HIGH').length;
  }

  get medCount(): number {
    return this.alarms.filter(a => a.severity === 'MEDIUM').length;
  }

  get lowCount(): number {
    return this.alarms.filter(a => a.severity === 'LOW').length;
  }

  togglePopup(): void {
    this.popupOpen = !this.popupOpen;
  }

  ngOnInit(): void {
    this.updateTime();
    this.timeInterval = setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.timeInterval) {
      clearInterval(this.timeInterval);
    }
  }

  private updateTime(): void {
    const now = new Date();
    this.currentTime = now.toLocaleTimeString('en-GB');
  }
}
