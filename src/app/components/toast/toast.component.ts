import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService, Toast } from '../../services/notification.service';

@Component({
    selector: 'app-toast',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="toast-container">
      <div *ngFor="let toast of toasts" 
           class="toast-item glass-morphism premium-shadow" 
           [class]="toast.type">
        <span class="icon">{{ getIcon(toast.type) }}</span>
        <span class="message">{{ toast.message }}</span>
        <button class="close" (click)="remove(toast.id)">&times;</button>
      </div>
    </div>
  `,
    styles: [`
    .toast-container {
      position: fixed;
      top: 30px;
      right: 30px;
      z-index: 9999;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .toast-item {
      min-width: 300px;
      padding: 15px 20px;
      display: flex;
      align-items: center;
      gap: 12px;
      animation: slideIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      border-left: 4px solid var(--primary);
      
      &.success { border-left-color: #4ade80; }
      &.error { border-left-color: #f87171; }
      &.warning { border-left-color: #fbbf24; }
      &.info { border-left-color: var(--primary); }
    }

    .icon { font-size: 1.2rem; }
    .message { flex: 1; font-size: 0.9rem; font-weight: 500; color: var(--text); }
    .close { 
      background: transparent; border: none; color: var(--text-muted); 
      font-size: 1.2rem; cursor: pointer; padding: 0 5px;
      &:hover { color: var(--text); }
    }

    @keyframes slideIn {
      from { transform: translateX(100%); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
  `]
})
export class ToastComponent implements OnInit {
    toasts: Toast[] = [];

    constructor(private notificationService: NotificationService) { }

    ngOnInit() {
        this.notificationService.toasts$.subscribe(toasts => {
            this.toasts = toasts;
        });
    }

    remove(id: number) {
        this.notificationService.remove(id);
    }

    getIcon(type: string): string {
        switch (type) {
            case 'success': return '✅';
            case 'error': return '❌';
            case 'warning': return '⚠️';
            default: return 'ℹ️';
        }
    }
}
