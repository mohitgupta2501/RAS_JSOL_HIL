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
        loadComponent: () =>
          import('./features/dashboard/dashboard.component').then(
            (m) => m.DashboardComponent
          )
      },
      {
        path: 'roll-details',
        loadComponent: () =>
          import('./features/roll-details/roll-details.component').then(
            (m) => m.RollDetailsComponent
          )
      },
      {
        path: 'mill-information',
        loadComponent: () =>
          import('./features/mill-information/mill-information.component').then(
            (m) => m.MillInformationComponent
          )
      },
      {
        path: 'telegram-logs',
        loadComponent: () =>
          import('./features/telegram-logs/telegram-logs.component').then(
            (m) => m.TelegramLogsComponent
          )
      },
      {
        path: 'alarms',
        loadComponent: () =>
          import('./features/alarms/alarms.component').then(
            (m) => m.AlarmsComponent
          )
      },
      {
        path: 'performance',
        loadComponent: () =>
          import('./features/performance/performance.component').then(
            (m) => m.PerformanceComponent
          )
      },
      {
        path: 'cost-analysis',
        loadComponent: () =>
          import('./features/cost-analysis/cost-analysis.component').then(
            (m) => m.CostAnalysisComponent
          )
      },
      {
        path: 'notifications',
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
