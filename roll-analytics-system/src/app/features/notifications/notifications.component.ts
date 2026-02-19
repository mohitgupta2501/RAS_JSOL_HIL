import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Notification {
  id: number;
  title: string;
  msg: string;
  time: string;
  type: 'danger' | 'warning' | 'success' | 'info';
  icon: string;
  read: boolean;
}

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss'
})
export class NotificationsComponent {
  activeFilter = 'All';
  filters = ['All', 'Unread'];

  notifications: Notification[] = [
    { id: 1, title: 'Critical Alarm', msg: 'High Temperature in Boiler detected - immediate action required', time: '2 minutes ago', type: 'danger', icon: 'thermostat', read: false },
    { id: 2, title: 'Critical Alarm', msg: 'Overheating Detected in Motor - Check cooling system', time: '15 minutes ago', type: 'danger', icon: 'warning', read: false },
    { id: 3, title: 'Warning', msg: 'Voltage Spike detected in Main Panel', time: '1 hour ago', type: 'warning', icon: 'bolt', read: false },
    { id: 4, title: 'Warning', msg: 'Vibration Anomaly detected in Roll Stand 3', time: '2 hours ago', type: 'warning', icon: 'vibration', read: false },
    { id: 5, title: 'System Info', msg: 'Shift A started successfully - Mon 19 Feb 2025', time: '8 hours ago', type: 'info', icon: 'info', read: true },
    { id: 6, title: 'System Info', msg: 'Daily health check completed successfully', time: '10 hours ago', type: 'success', icon: 'check_circle', read: true },
    { id: 7, title: 'Warning', msg: 'Coolant Flow dropped below threshold in Stand F3', time: '1 day ago', type: 'warning', icon: 'water_drop', read: true },
    { id: 8, title: 'System Info', msg: 'Performance report generated for Shift C', time: '2 days ago', type: 'info', icon: 'assessment', read: true }
  ];

  get filteredNotifications(): Notification[] {
    if (this.activeFilter === 'All') return this.notifications;
    if (this.activeFilter === 'Unread') return this.notifications.filter(n => !n.read);
    return this.notifications;
  }

  get unreadCount(): number {
    return this.notifications.filter(n => !n.read).length;
  }

  markAllRead(): void {
    this.notifications.forEach(n => n.read = true);
  }

  clearAll(): void {
    this.notifications = [];
  }

  markRead(n: Notification): void {
    n.read = true;
  }

  filterBy(f: string): void {
    this.activeFilter = f;
  }
}
