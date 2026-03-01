import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsersComponent } from './pages/users/users.component';
import { AdminToolsComponent } from './pages/admin-tools/admin-tools.component';

export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'users', component: UsersComponent },
    { path: 'admin-tools', component: AdminToolsComponent },
    { path: 'settings', component: DashboardComponent }, // Placeholder
    { path: 'profile', component: DashboardComponent },  // Placeholder
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];
