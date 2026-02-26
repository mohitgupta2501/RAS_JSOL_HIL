import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export type Severity = 'HIGH' | 'MEDIUM' | 'LOW';

export interface Alarm {
  date: string;
  time: string;
  description: string;
  parameter: string;
  severity: Severity;
}

@Component({
  selector: 'app-alarms',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './alarms.component.html',
  styleUrl: './alarms.component.scss'
})
export class AlarmsComponent {
  sortField: keyof Alarm | '' = '';
  sortDir: 1 | -1 = 1;
  panelCollapsed = true;

  alarmsCurrentPage = 1;
  alarmsPageSize = 10;
  alarmsTotalRows = 0;

  readonly alarms: Alarm[] = [
    { date: '13/02/2026', time: '10:30 AM', description: 'High Temperature in Boiler', parameter: 'Temperature', severity: 'HIGH' },
    { date: '13/02/2026', time: '9:15 AM', description: 'Low Pressure in Turbine', parameter: 'Pressure', severity: 'LOW' },
    { date: '12/02/2026', time: '6:45 PM', description: 'Medium Flow Variation in Pipeline', parameter: 'Flow Rate', severity: 'MEDIUM' },
    { date: '11/02/2026', time: '1:10 PM', description: 'Overheating Detected in Motor', parameter: 'Temperature', severity: 'HIGH' },
    { date: '10/02/2026', time: '4:00 AM', description: 'Compressor Load Fluctuation', parameter: 'Load', severity: 'LOW' },
    { date: '09/02/2026', time: '11:20 AM', description: 'Voltage Spike in Main Panel', parameter: 'Voltage', severity: 'HIGH' },
    { date: '09/02/2026', time: '8:45 AM', description: 'Vibration Anomaly in Roll Stand 3', parameter: 'Vibration', severity: 'MEDIUM' },
    { date: '08/02/2026', time: '3:30 PM', description: 'Coolant Flow Below Threshold', parameter: 'Flow Rate', severity: 'LOW' },
    { date: '07/02/2026', time: '7:00 AM', description: 'Bearing Temperature Critical', parameter: 'Temperature', severity: 'HIGH' },
    { date: '06/02/2026', time: '2:15 PM', description: 'Hydraulic Pressure Drop', parameter: 'Pressure', severity: 'MEDIUM' }
  ];

  get alarmsTotalPages(): number {
    return Math.ceil(this.alarmsTotalRows / this.alarmsPageSize);
  }

  private get sortedAll(): Alarm[] {
    if (!this.sortField) return [...this.alarms];
    return [...this.alarms].sort((a, b) => {
      const va = a[this.sortField as keyof Alarm];
      const vb = b[this.sortField as keyof Alarm];
      if (va === vb) return 0;
      const cmp = String(va).localeCompare(String(vb), undefined, { numeric: true });
      return this.sortDir * (cmp < 0 ? -1 : 1);
    });
  }

  get sorted(): Alarm[] {
    const start = (this.alarmsCurrentPage - 1) * this.alarmsPageSize;
    return this.sortedAll.slice(start, start + this.alarmsPageSize);
  }

  alarmsGoToPage(page: number) {
    if (page >= 1 && page <= this.alarmsTotalPages) {
      this.alarmsCurrentPage = page;
    }
  }

  alarmsGetPageNumbers(): number[] {
    const total = this.alarmsTotalPages;
    const current = this.alarmsCurrentPage;
    if (total <= 7) {
      return Array.from({ length: total }, (_, i) => i + 1);
    }
    const pages: (number | string)[] = [1];
    if (current > 3) pages.push(-1);
    for (let i = Math.max(2, current - 1); i <= Math.min(total - 1, current + 1); i++) {
      pages.push(i);
    }
    if (current < total - 2) pages.push(-1);
    pages.push(total);
    return pages as number[];
  }

  get totalCount(): number {
    return this.alarms.length;
  }

  get highCount(): number {
    return this.alarms.filter((a) => a.severity === 'HIGH').length;
  }

  get mediumCount(): number {
    return this.alarms.filter((a) => a.severity === 'MEDIUM').length;
  }

  get lowCount(): number {
    return this.alarms.filter((a) => a.severity === 'LOW').length;
  }

  sort(field: keyof Alarm): void {
    if (this.sortField === field) {
      this.sortDir = (this.sortDir === 1 ? -1 : 1) as 1 | -1;
    } else {
      this.sortField = field;
      this.sortDir = 1;
    }
  }

  togglePanel(): void {
    this.panelCollapsed = !this.panelCollapsed;
  }

  constructor() {
    this.alarmsTotalRows = this.alarms.length;
  }

  downloadCsv(): void {
    const headers = ['Date', 'Time', 'Description', 'Parameter', 'Severity'];
    const rows = this.alarms.map((a) =>
      [a.date, a.time, a.description, a.parameter, a.severity].map((c) => `"${String(c).replace(/"/g, '""')}"`).join(',')
    );
    const csv = [headers.join(','), ...rows].join('\r\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'alarms_export.csv';
    a.click();
    URL.revokeObjectURL(url);
  }

  onExportAlarms() {
    const headers = Object.keys(this.alarms[0] || {});
    const rows = this.alarms.map((r: any) => headers.map(h => r[h] ?? ''));
    const csv = [headers, ...rows].map(r => r.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `alarms-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  }
}
