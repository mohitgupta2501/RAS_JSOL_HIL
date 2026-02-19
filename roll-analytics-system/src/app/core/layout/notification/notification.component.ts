import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Notification {
  id: number;
  message: string;
  time: string;
  type: 'danger' | 'warning' | 'success' | 'info';
  icon: string;
  read: boolean;
}

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss'
})
export class NotificationComponent {
  @Input() isOpen = false;
  @Output() closePanel = new EventEmitter<void>();

  notifications: Notification[] = [
    { id: 1, message: 'High Temperature in Boiler detected', time: '2 mins ago', type: 'danger', icon: 'thermostat', read: false },
    { id: 2, message: 'Overheating Detected in Motor', time: '15 mins ago', type: 'danger', icon: 'warning', read: false },
    { id: 3, message: 'Voltage Spike in Main Panel', time: '1 hour ago', type: 'warning', icon: 'bolt', read: false },
    { id: 4, message: 'System health check completed', time: '2 hours ago', type: 'success', icon: 'check_circle', read: true },
    { id: 5, message: 'Shift A started successfully', time: '8 hours ago', type: 'info', icon: 'info', read: true }
  ];

  get unreadNotifs(): number {
    return this.notifications.filter(n => !n.read).length;
  }

  markRead(n: Notification): void {
    n.read = true;
  }

  markAllRead(): void {
    this.notifications.forEach(n => n.read = true);
  }

  clearAll(): void {
    this.notifications = [];
  }
}
