import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsersComponent } from './pages/users/users.component';
import { AdminToolsComponent } from './pages/admin-tools/admin-tools.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ProfileComponent } from './pages/profile/profile.component';

export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'users', component: UsersComponent },
    { path: 'admin-tools', component: AdminToolsComponent },
    { path: 'settings', component: SettingsComponent },
    { path: 'profile', component: ProfileComponent },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];
