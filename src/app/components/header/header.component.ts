import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="header glass-morphism premium-shadow">
      <div class="header-left">
        <button class="menu-toggle interactive-hover" (click)="layoutService.toggleSidebar()">
          ☰
        </button>
        <div class="search-bar glass-morphism">
          <i class="icon">🔍</i>
          <input type="text" placeholder="Search anything...">
        </div>
      </div>
      
      <div class="header-right">
        <div class="action-icons">
          <button class="icon-btn interactive-hover">🔔</button>
          <button class="icon-btn interactive-hover">💬</button>
        </div>
        
        <div class="divider"></div>
        
        <div class="date-display">
          <span class="day">Friday,</span>
          <span class="date">13 February 2026</span>
        </div>
      </div>
    </header>
  `,
  styles: [`
    .header {
      height: var(--header-height);
      margin: 20px;
      padding: 0 30px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: sticky;
      top: 20px;
      z-index: 999;
    }

    .header-left {
      display: flex;
      align-items: center;
      gap: 20px;
      flex: 1;
    }

    .menu-toggle {
      background: var(--glass-bg);
      border: 1px solid var(--glass-border);
      width: 40px;
      height: 40px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      color: var(--text);
      font-size: 1.2rem;
      transition: all 0.2s ease;
    }

    @media (min-width: 1025px) {
      .menu-toggle {
        display: none;
      }
    }

    .search-bar {
      max-width: 400px;
      padding: 10px 20px;
      display: flex;
      align-items: center;
      gap: 12px;
      background: rgba(255, 255, 255, 0.03);
      
      .icon {
        font-size: 1.1rem;
        color: var(--text-muted);
      }
      
      input {
        background: transparent;
        border: none;
        color: var(--text);
        font-family: inherit;
        font-size: 0.9rem;
        width: 100%;
        outline: none;
        
        &::placeholder {
          color: var(--text-muted);
        }
      }
    }

    .header-right {
      display: flex;
      align-items: center;
      gap: 25px;
    }

    .action-icons {
      display: flex;
      gap: 10px;
    }

    .icon-btn {
      background: var(--glass-bg);
      border: 1px solid var(--glass-border);
      width: 40px;
      height: 40px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      color: var(--text);
      font-size: 1.2rem;
    }

    .divider {
      height: 30px;
      width: 1px;
      background: var(--glass-border);
    }

    .date-display {
      text-align: right;
      .day {
        display: block;
        font-size: 0.8rem;
        color: var(--text-muted);
        font-weight: 500;
      }
      .date {
        font-size: 0.9rem;
        font-weight: 600;
        color: var(--text);
      }
    }
  `]
})
export class HeaderComponent {
  constructor(public layoutService: LayoutService) { }
}
