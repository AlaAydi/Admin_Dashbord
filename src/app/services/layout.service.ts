import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LayoutService {
    private sidebarOpenSubject = new BehaviorSubject<boolean>(true);
    sidebarOpen$ = this.sidebarOpenSubject.asObservable();

    toggleSidebar() {
        this.sidebarOpenSubject.next(!this.sidebarOpenSubject.value);
    }

    setSidebarOpen(isOpen: boolean) {
        this.sidebarOpenSubject.next(isOpen);
    }

    get isSidebarOpen(): boolean {
        return this.sidebarOpenSubject.value;
    }
}
