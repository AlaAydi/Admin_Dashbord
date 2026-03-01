import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-admin-tools',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './admin-tools.component.html',
    styleUrl: './admin-tools.component.scss'
})
export class AdminToolsComponent {
    systemMetrics = [
        { label: 'CPU Usage', value: '12%', status: 'healthy', icon: '💻' },
        { label: 'Memory Usage', value: '45%', status: 'healthy', icon: '💾' },
        { label: 'Disk Space', value: '82%', status: 'warning', icon: '💽' },
        { label: 'Server Latency', value: '24ms', status: 'healthy', icon: '🌐' }
    ];

    auditLogs = [
        { action: 'User Permissions Changed', admin: 'Aydi Ala', target: 'Sarah Connor', time: '10 mins ago' },
        { action: 'System Backup Configured', admin: 'Aydi Ala', target: 'Database', time: '1 hour ago' },
        { action: 'Global Settings Updated', admin: 'SuperAdmin01', target: 'Security', time: '2 hours ago' },
        { action: 'API Key Rotated', admin: 'System', target: 'Auth Service', time: '5 hours ago' }
    ];
}
