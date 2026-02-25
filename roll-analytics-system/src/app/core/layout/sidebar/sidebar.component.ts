import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LayoutService } from '../../services/layout.service';

interface MenuItem {
  path: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  layoutService = inject(LayoutService);

  readonly version = 'v2.4.1';

  menuItems: MenuItem[] = [
    { path: '/home', label: 'Home', icon: 'home' },
    { path: '/dashboard', label: 'Dashboard', icon: 'dashboard' },
    { path: '/roll-details', label: 'Roll Details', icon: 'settings' },
    { path: '/roll-analysis', label: 'Roll Analysis', icon: 'analytics' },
    { path: '/mill-information', label: 'Mill Information', icon: 'precision_manufacturing' },
    { path: '/telegram-logs', label: 'Telegram Logs', icon: 'chat' },
    { path: '/alarms', label: 'Alarms', icon: 'notifications_active' },
    { path: '/performance', label: 'Performance', icon: 'speed' },
    { path: '/performance-analysis', label: 'Perf. Analysis', icon: 'leaderboard' },
    { path: '/cost-analysis', label: 'Cost Analysis', icon: 'paid' },
    { path: '/reports', label: 'Reports', icon: 'summarize' }
  ];

  toggleSidebar(): void {
    this.layoutService.toggleSidebar();
  }

  onNavClick(): void {
    this.layoutService.closeMobileSidebar();
  }
}
