import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  layoutService = inject(LayoutService);

  readonly shiftLabel = 'Shift A  ·  Mon, 19 Feb 2025';
  readonly shiftTime = '06:00 – 14:00';
  unreadCount = 4;

  toggleMobileSidebar(): void {
    this.layoutService.toggleMobileSidebar();
  }
}
