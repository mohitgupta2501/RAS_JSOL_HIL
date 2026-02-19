import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  template: '<div class="page-placeholder">Dashboard</div>',
  styles: ['.page-placeholder { display: flex; justify-content: center; align-items: center; min-height: 300px; color: var(--text-primary); font-size: 1.5rem; }']
})
export class DashboardComponent {}
