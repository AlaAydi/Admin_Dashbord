import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NotificationService } from '../../services/notification.service';

@Component({
    selector: 'app-profile',
    standalone: true,
    imports: [CommonModule, FormsModule],
    template: `
    <div class="profile-page">
      <header class="page-header">
        <h1>User Profile</h1>
      </header>

      <div class="profile-container glass-morphism premium-shadow">
        <div class="profile-header">
          <div class="avatar-large glass-morphism">AA</div>
          <div class="header-info">
            <h2>Aydi Ala</h2>
            <p>Super Admin</p>
          </div>
        </div>

        <form (ngSubmit)="saveProfile()" class="profile-form">
          <div class="form-grid">
            <div class="form-group">
              <label>Full Name</label>
              <input type="text" [(ngModel)]="user.name" name="name" class="glass-input">
            </div>
            <div class="form-group">
              <label>Email Address</label>
              <input type="email" [(ngModel)]="user.email" name="email" class="glass-input">
            </div>
            <div class="form-group">
              <label>Role</label>
              <input type="text" [value]="user.role" disabled class="glass-input disabled">
            </div>
            <div class="form-group">
              <label>Location</label>
              <input type="text" [(ngModel)]="user.location" name="location" class="glass-input">
            </div>
          </div>
          
          <div class="form-actions">
            <button type="submit" class="save-btn interactive-hover">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  `,
    styles: [`
    .profile-page { max-width: 1000px; }
    .profile-container { padding: 40px; }
    .profile-header { display: flex; align-items: center; gap: 30px; margin-bottom: 40px; padding-bottom: 40px; border-bottom: 1px solid var(--glass-border); }
    .avatar-large { width: 100px; height: 100px; border-radius: 20px; font-size: 2rem; font-weight: 700; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, var(--primary), var(--accent)); }
    .header-info h2 { font-size: 1.8rem; margin-bottom: 5px; }
    .header-info p { color: var(--text-muted); }
    .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-bottom: 30px; }
    .form-group { display: flex; flex-direction: column; gap: 8px; }
    .form-group label { font-size: 0.9rem; color: var(--text-muted); }
    .glass-input { background: rgba(255, 255, 255, 0.05); border: 1px solid var(--glass-border); border-radius: 12px; padding: 12px 15px; color: var(--text); outline: none; transition: all 0.3s ease; }
    .glass-input:focus { border-color: var(--primary); background: rgba(255, 255, 255, 0.1); }
    .glass-input.disabled { opacity: 0.5; cursor: not-allowed; }
    .save-btn { background: var(--primary); color: white; border: none; padding: 12px 30px; border-radius: 12px; font-weight: 600; cursor: pointer; box-shadow: 0 4px 15px color-mix(in srgb, var(--primary), transparent 70%); }
  `]
})
export class ProfileComponent {
    user = {
        name: 'Aydi Ala',
        email: 'aydi@example.com',
        role: 'Super Admin',
        location: 'Tunis, Tunisia'
    };

    constructor(private notificationService: NotificationService) { }

    saveProfile() {
        this.notificationService.success('Profile updated successfully!');
    }
}
