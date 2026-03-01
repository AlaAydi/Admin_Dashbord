import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Toast {
    message: string;
    type: 'success' | 'error' | 'warning' | 'info';
    id: number;
}

@Injectable({
    providedIn: 'root'
})
export class NotificationService {
    private toastsSubject = new BehaviorSubject<Toast[]>([]);
    toasts$ = this.toastsSubject.asObservable();

    show(message: string, type: Toast['type'] = 'info') {
        const id = Date.now();
        const currenttoasts = this.toastsSubject.value;
        this.toastsSubject.next([...currenttoasts, { message, type, id }]);

        setTimeout(() => {
            this.remove(id);
        }, 3000);
    }

    success(message: string) { this.show(message, 'success'); }
    error(message: string) { this.show(message, 'error'); }
    warning(message: string) { this.show(message, 'warning'); }
    info(message: string) { this.show(message, 'info'); }

    remove(id: number) {
        const currenttoasts = this.toastsSubject.value;
        this.toastsSubject.next(currenttoasts.filter(t => t.id !== id));
    }
}
