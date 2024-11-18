import { Routes } from '@angular/router';
import { LayoutComponent } from './laoyout/layout/layout.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {
        path:"home", component:LayoutComponent
    },
    {
        path:"login", component:LoginComponent
    },
];
