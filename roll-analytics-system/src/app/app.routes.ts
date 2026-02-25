import { Routes } from '@angular/router';
import { authGuard } from './core/auth/auth.guard';

export const routes: Routes = [
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./features/auth/login/login.component').then(
            (m) => m.LoginComponent
          )
      },
      {
        path: 'forgot-password',
        loadComponent: () =>
          import('./features/auth/forgot-password/forgot-password.component').then(
            (m) => m.ForgotPasswordComponent
          )
      },
      {
        path: 'verify-otp',
        loadComponent: () =>
          import('./features/auth/verify-otp/verify-otp.component').then(
            (m) => m.VerifyOtpComponent
          )
      },
      {
        path: 'reset-password',
        loadComponent: () =>
          import('./features/auth/reset-password/reset-password.component').then(
            (m) => m.ResetPasswordComponent
          )
      },
      { path: '', redirectTo: 'login', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  {
    path: '',
    loadComponent: () =>
      import('./core/layout/layout/layout.component').then(
        (m) => m.LayoutComponent
      ),
    canActivate: [authGuard],
    children: [
      {
        path: 'home',
        title: 'Home',
        data: { icon: 'home' },
        loadComponent: () =>
          import('./features/home/home.component').then((m) => m.HomeComponent)
      },
      {
        path: 'inventory',
        title: 'Inventory',
        data: { icon: 'inventory_2' },
        loadComponent: () =>
          import('./features/inventory/inventory.component').then(
            (m) => m.InventoryComponent
          )
      },
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
        path: 'roll-analysis',
        title: 'Roll Analysis',
        data: { icon: 'analytics' },
        loadComponent: () =>
          import('./features/roll-analysis/roll-analysis.component').then(
            (m) => m.RollAnalysisComponent
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
        path: 'performance-analysis',
        title: 'Performance Analysis',
        data: { icon: 'leaderboard' },
        loadComponent: () =>
          import('./features/performance-analysis/performance-analysis.component').then(
            (m) => m.PerformanceAnalysisComponent
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
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: 'auth/login', pathMatch: 'full' }
];
