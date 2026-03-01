import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NotificationService } from '../../services/notification.service';

@Component({
    selector: 'app-settings',
    standalone: true,
    imports: [CommonModule, FormsModule],
    template: `
    <div class="settings-page">
      <header class="page-header">
        <h1>Settings</h1>
      </header>

      <div class="settings-grid">
        <section class="settings-card glass-morphism premium-shadow">
          <h3>General Settings</h3>
          <div class="setting-item">
            <div class="info">
              <p class="label">Site Name</p>
              <p class="desc">The name of your admin dashboard.</p>
            </div>
            <input type="text" [(ngModel)]="settings.siteName" class="glass-input">
          </div>
          <div class="setting-item">
            <div class="info">
              <p class="label">Primary Color</p>
              <p class="desc">The main brand color of the UI.</p>
            </div>
            <input type="color" [(ngModel)]="settings.primaryColor" class="color-picker">
          </div>
        </section>

        <section class="settings-card glass-morphism premium-shadow">
          <h3>Notifications</h3>
          <div class="setting-item">
            <div class="info">
              <p class="label">Email Notifications</p>
              <p class="desc">Receive updates via email.</p>
            </div>
            <label class="switch">
              <input type="checkbox" [(ngModel)]="settings.emailNotifications">
              <span class="slider"></span>
            </label>
          </div>
          <div class="setting-item">
            <div class="info">
              <p class="label">Desktop Alerts</p>
              <p class="desc">Show browser notifications.</p>
            </div>
            <label class="switch">
              <input type="checkbox" [(ngModel)]="settings.desktopAlerts">
              <span class="slider"></span>
            </label>
          </div>
        </section>
      </div>

      <div class="page-actions">
        <button (click)="saveSettings()" class="save-btn interactive-hover">Save Configuration</button>
      </div>
    </div>
  `,
    styles: [`
    .settings-page { max-width: 1000px; }
    .settings-grid { display: grid; grid-template-columns: 1fr; gap: 30px; margin-bottom: 30px; }
    .settings-card { padding: 30px; }
    .settings-card h3 { margin-bottom: 25px; font-size: 1.2rem; color: var(--primary); }
    .setting-item { display: flex; justify-content: space-between; align-items: center; padding: 20px 0; border-bottom: 1px solid var(--glass-border); }
    .setting-item:last-child { border-bottom: none; }
    .info .label { font-weight: 600; margin-bottom: 4px; }
    .info .desc { font-size: 0.8rem; color: var(--text-muted); }
    .glass-input { background: rgba(255, 255, 255, 0.05); border: 1px solid var(--glass-border); border-radius: 8px; padding: 8px 12px; color: var(--text); outline: none; }
    .color-picker { width: 40px; height: 40px; border: none; border-radius: 8px; background: none; cursor: pointer; }
    
    .switch { position: relative; display: inline-block; width: 50px; height: 24px; }
    .switch input { opacity: 0; width: 0; height: 0; }
    .slider { position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background-color: rgba(255, 255, 255, 0.1); transition: .4s; border-radius: 34px; border: 1px solid var(--glass-border); }
    .slider:before { position: absolute; content: ""; height: 16px; width: 16px; left: 4px; bottom: 3px; background-color: var(--text-muted); transition: .4s; border-radius: 50%; }
    input:checked + .slider { background-color: var(--primary); }
    input:checked + .slider:before { transform: translateX(24px); background-color: white; }
    
    .page-actions { display: flex; justify-content: flex-end; }
    .save-btn { background: var(--primary); color: white; border: none; padding: 12px 30px; border-radius: 12px; font-weight: 600; cursor: pointer; box-shadow: 0 4px 15px color-mix(in srgb, var(--primary), transparent 70%); }
  `]
})
export class SettingsComponent {
    settings = {
        siteName: 'AlaDesign Admin',
        primaryColor: '#6366f1',
        emailNotifications: true,
        desktopAlerts: false
    };

    constructor(private notificationService: NotificationService) { }

    saveSettings() {
        this.notificationService.success('Settings saved successfully!');
    }
}
