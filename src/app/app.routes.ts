import { Routes } from '@angular/router';
import { AuthGuard } from '../auth/guard.guard';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/laoyout/layout/layout.component';

export const routes: Routes = [
    {
        path:"", component:LoginComponent
    },
    {
        path:"home", 
        component:LayoutComponent,
        canActivate: [AuthGuard]
    },
    {
        path:"login", component:LoginComponent
    },
];
