import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <aside class="sidebar glass-morphism premium-shadow">
      <div class="sidebar-header">
        <h2 class="branding">AlaDesign</h2>
      </div>
      
      <nav class="sidebar-nav">
        <ul>
          <li class="nav-item interactive-hover" routerLink="/dashboard" routerLinkActive="active">
            <i class="icon">📊</i>
            <span>Dashboard</span>
          </li>
          <li class="nav-item interactive-hover" routerLink="/users" routerLinkActive="active">
            <i class="icon">👥</i>
            <span>Users</span>
          </li>
          <li class="nav-item interactive-hover" routerLink="/admin-tools" routerLinkActive="active">
            <i class="icon">🛡️</i>
            <span>Admin Tools</span>
          </li>
          <li class="nav-item interactive-hover" routerLink="/settings" routerLinkActive="active">
            <i class="icon">⚙️</i>
            <span>Settings</span>
          </li>
          <li class="nav-item interactive-hover" routerLink="/profile" routerLinkActive="active">
            <i class="icon">👤</i>
            <span>Profile</span>
          </li>
        </ul>
      </nav>

      <div class="sidebar-footer">
        <div class="user-info">
          <div class="avatar glass-morphism"></div>
          <div class="details">
            <p class="name">Admin User</p>
            <p class="role">Super Admin</p>
          </div>
        </div>
      </div>
    </aside>
  `,
  styles: [`
    .sidebar {
      width: var(--sidebar-width);
      height: calc(100vh - 40px);
      margin: 20px;
      display: flex;
      flex-direction: column;
      position: fixed;
      left: 0;
      top: 0;
      z-index: 1000;
    }

    .sidebar-header {
      padding: 30px;
      text-align: center;
    }

    .branding {
      font-size: 1.5rem;
      font-weight: 700;
      letter-spacing: -0.5px;
      color: var(--text);
      span {
        color: var(--primary);
      }
    }

    .sidebar-nav {
      flex: 1;
      padding: 10px 15px;
      
      ul {
        list-style: none;
      }
    }

    .nav-item {
      display: flex;
      align-items: center;
      padding: 12px 15px;
      margin-bottom: 8px;
      border-radius: 12px;
      cursor: pointer;
      color: var(--text-muted);
      outline: none;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      
      .icon {
        margin-right: 15px;
        font-size: 1.2rem;
      }
      
      span {
        font-weight: 500;
        font-size: 0.95rem;
      }

      &.active {
        background: var(--primary);
        color: var(--text);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        
        .icon {
          color: var(--text);
        }
      }

      &:hover:not(.active) {
        background: hsla(0, 0%, 100%, 0.08);
      }
    }

    .sidebar-footer {
      padding: 20px;
      border-top: 1px solid var(--glass-border);
    }

    .user-info {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 10px;
      background: linear-gradient(135deg, var(--primary), var(--accent));
    }

    .details {
      .name {
        font-size: 0.9rem;
        font-weight: 600;
        color: var(--text);
      }
      .role {
        font-size: 0.75rem;
        color: var(--text-muted);
      }
    }
  `]
})
export class SidebarComponent { }
