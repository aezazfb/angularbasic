import { Component } from '@angular/core';
import { Router } from '@angular/router';
import store from 'store2';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainSectionComponent } from './main-section/main-section.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent, MainSectionComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

  constructor(private router: Router){}
  
  logMe(){
    console.log("WOrking.");
    store.remove('token');
    const token = store('token');
    console.log('Token after removal:', token); 
    this.router.navigateByUrl('/login');
  }
}
