import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-users',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './users.component.html',
    styleUrl: './users.component.scss'
})
export class UsersComponent {
    users = [
        { id: 1, name: 'Aydi Ala', email: 'aydi@example.com', role: 'Super Admin', status: 'active', avatar: 'AA' },
        { id: 2, name: 'Sarah Connor', email: 'sarah@example.com', role: 'Editor', status: 'active', avatar: 'SC' },
        { id: 3, name: 'John Doe', email: 'john@example.com', role: 'Viewer', status: 'away', avatar: 'JD' },
        { id: 4, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', status: 'active', avatar: 'JS' },
        { id: 5, name: 'Mike Ross', email: 'mike@example.com', role: 'Viewer', status: 'inactive', avatar: 'MR' },
    ];
}
