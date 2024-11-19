import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  isOpen = false; // Sidebar state
  
  // Toggle the sidebar
  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  // Close the sidebar
  closeSidebar() {
    this.isOpen = false;
  }
  

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const width = (event.target as Window).innerWidth;
    this.isOpen = width >= 1024; // Expanded by default on large screens
  }
}
