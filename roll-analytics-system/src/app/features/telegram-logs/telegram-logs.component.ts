import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export type Direction = 'Send' | 'Receive';
export type Status = 'Sent' | 'Received';

export interface TelegramLog {
  date: string;
  time: string;
  teleNo: string;
  teleDescription: string;
  direction: Direction;
  outerSystem: string;
  cmmMode: string;
  length: number;
  status: Status;
  user: string;
}

@Component({
  selector: 'app-telegram-logs',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './telegram-logs.component.html',
  styleUrl: './telegram-logs.component.scss'
})
export class TelegramLogsComponent {
  sortField: keyof TelegramLog | '' = '';
  sortDir: 1 | -1 = 1;
  accordionCollapsed = true;

  telegramCurrentPage = 1;
  telegramPageSize = 10;
  telegramTotalRows = 0;

  private readonly rawLogs: TelegramLog[] = [
    { date: '28/08/2025', time: '8:21 AM', teleNo: 'L001', teleDescription: 'Setup Data', direction: 'Send', outerSystem: 'L1', cmmMode: 'TCP/IP', length: 0, status: 'Sent', user: 'L2' },
    { date: '28/08/2025', time: '8:20 AM', teleNo: 'L001', teleDescription: 'Setup Data', direction: 'Receive', outerSystem: 'M2', cmmMode: 'TCP/IP', length: 0, status: 'Received', user: 'L2' },
    { date: '28/08/2025', time: '6:19 AM', teleNo: 'P002', teleDescription: 'Coil on Entry Coil Station(PDI Request)', direction: 'Send', outerSystem: 'M2', cmmMode: 'TCP/IP', length: 0, status: 'Sent', user: 'L2' },
    { date: '28/08/2025', time: '6:19 AM', teleNo: 'P003', teleDescription: 'Coil on Entry Coil Station(PDI Request)', direction: 'Receive', outerSystem: 'L1', cmmMode: 'TCP/IP', length: 0, status: 'Received', user: 'L2' },
    { date: '25/08/2025', time: '6:04 PM', teleNo: 'P002', teleDescription: 'Coil Tracking Information', direction: 'Receive', outerSystem: 'L1', cmmMode: 'TCP/IP', length: 0, status: 'Received', user: 'L2' },
    { date: '12/08/2025', time: '9:56 AM', teleNo: 'P001', teleDescription: 'Label Printing on Coil', direction: 'Send', outerSystem: 'LP', cmmMode: 'TCP/IP', length: 0, status: 'Sent', user: 'L2' },
    { date: '12/08/2025', time: '9:56 AM', teleNo: 'P001', teleDescription: 'Coil Sampling Result(PDO)', direction: 'Send', outerSystem: 'M2', cmmMode: 'TCP/IP', length: 0, status: 'Sent', user: 'L2' },
    { date: '12/08/2025', time: '9:56 AM', teleNo: 'P001', teleDescription: 'Coil Sampling Result(PDO)', direction: 'Receive', outerSystem: 'L1', cmmMode: 'TCP/IP', length: 0, status: 'Received', user: 'L2' },
    { date: '12/08/2025', time: '9:55 AM', teleNo: 'P001', teleDescription: 'Label Printing on Coil', direction: 'Send', outerSystem: 'LP', cmmMode: 'TCP/IP', length: 0, status: 'Sent', user: 'L2' },
    { date: '12/08/2025', time: '9:10 AM', teleNo: 'P001', teleDescription: 'Coil Sampling Result(PDO)', direction: 'Send', outerSystem: 'M2', cmmMode: 'TCP/IP', length: 0, status: 'Sent', user: 'L2' },
    { date: '10/08/2025', time: '2:30 PM', teleNo: 'P004', teleDescription: 'Roll Force Measurement', direction: 'Send', outerSystem: 'L1', cmmMode: 'TCP/IP', length: 0, status: 'Sent', user: 'L2' }
  ];

  get logs(): TelegramLog[] {
    return this.rawLogs;
  }

  get telegramTotalPages(): number {
    return Math.ceil(this.telegramTotalRows / this.telegramPageSize);
  }

  telegramGoToPage(page: number) {
    if (page >= 1 && page <= this.telegramTotalPages) {
      this.telegramCurrentPage = page;
    }
  }

  telegramGetPageNumbers(): number[] {
    const total = this.telegramTotalPages;
    const current = this.telegramCurrentPage;
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

  get sorted(): TelegramLog[] {
    if (!this.sortField) return [...this.pagedData];
    return [...this.pagedData].sort((a, b) => {
      const va = a[this.sortField as keyof TelegramLog];
      const vb = b[this.sortField as keyof TelegramLog];
      if (va === vb) return 0;
      const cmp = String(va).localeCompare(String(vb), undefined, { numeric: true });
      return this.sortDir * (cmp < 0 ? -1 : 1);
    });
  }

  get pagedData(): TelegramLog[] {
    const start = (this.telegramCurrentPage - 1) * this.telegramPageSize;
    return this.logs.slice(start, start + this.telegramPageSize);
  }

  sort(field: keyof TelegramLog): void {
    if (this.sortField === field) {
      this.sortDir = (this.sortDir === 1 ? -1 : 1) as 1 | -1;
    } else {
      this.sortField = field;
      this.sortDir = 1;
    }
  }

  constructor() {
    this.telegramTotalRows = this.logs.length;
  }

  downloadCsv(): void {
    const headers = ['Date', 'Time', 'Tele.No', 'Tele.Description', 'Direction', 'Outer System', 'Cmm Mode', 'Length', 'Status', 'User'];
    const rows = this.logs.map((r) =>
      [r.date, r.time, r.teleNo, r.teleDescription, r.direction, r.outerSystem, r.cmmMode, r.length, r.status, r.user]
        .map((c) => `"${String(c).replace(/"/g, '""')}"`)
        .join(',')
    );
    const csv = [headers.join(','), ...rows].join('\r\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'telegram_logs_export.csv';
    a.click();
    URL.revokeObjectURL(url);
  }

  onExportTelegram() {
    const headers = Object.keys(this.logs[0] || {});
    const rows = this.logs.map((r: any) => headers.map(h => r[h] ?? ''));
    const csv = [headers, ...rows].map(r => r.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `telegram-logs-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  }
}
