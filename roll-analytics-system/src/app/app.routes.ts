import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./core/layout/layout/layout.component').then(
        (m) => m.LayoutComponent
      ),
    children: [
      {
        path: 'dashboard',
        title: 'Dashboard',
        data: { icon: 'dashboard' },
        loadComponent: () =>
          import('./features/dashboard/dashboard.component').then(
            (m) => m.DashboardComponent
          )
      },
      {
        path: 'roll-details',
        title: 'Roll Details',
        data: { icon: 'settings' },
        loadComponent: () =>
          import('./features/roll-details/roll-details.component').then(
            (m) => m.RollDetailsComponent
          )
      },
      {
        path: 'mill-information',
        title: 'Mill Information',
        data: { icon: 'precision_manufacturing' },
        loadComponent: () =>
          import('./features/mill-information/mill-information.component').then(
            (m) => m.MillInformationComponent
          )
      },
      {
        path: 'telegram-logs',
        title: 'Telegram Logs',
        data: { icon: 'chat' },
        loadComponent: () =>
          import('./features/telegram-logs/telegram-logs.component').then(
            (m) => m.TelegramLogsComponent
          )
      },
      {
        path: 'alarms',
        title: 'Alarms',
        data: { icon: 'notifications_active' },
        loadComponent: () =>
          import('./features/alarms/alarms.component').then(
            (m) => m.AlarmsComponent
          )
      },
      {
        path: 'performance',
        title: 'Performance',
        data: { icon: 'analytics' },
        loadComponent: () =>
          import('./features/performance/performance.component').then(
            (m) => m.PerformanceComponent
          )
      },
      {
        path: 'cost-analysis',
        title: 'Cost Analysis',
        data: { icon: 'paid' },
        loadComponent: () =>
          import('./features/cost-analysis/cost-analysis.component').then(
            (m) => m.CostAnalysisComponent
          )
      },
      {
        path: 'reports',
        title: 'Reports',
        data: { icon: 'summarize' },
        loadComponent: () =>
          import('./features/reports/reports.component').then(
            (m) => m.ReportsComponent
          )
      },
      {
        path: 'notifications',
        title: 'Notifications',
        data: { icon: 'notifications' },
        loadComponent: () =>
          import('./features/notifications/notifications.component').then(
            (m) => m.NotificationsComponent
          )
      },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: '/dashboard', pathMatch: 'full' }
];
