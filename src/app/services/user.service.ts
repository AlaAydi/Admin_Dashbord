import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface User {
    id: number;
    name: string;
    email: string;
    role: 'Super Admin' | 'Editor' | 'Viewer';
    status: 'active' | 'away' | 'inactive';
    avatar: string;
}

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private initialUsers: User[] = [
        { id: 1, name: 'Aydi Ala', email: 'aydi@example.com', role: 'Super Admin', status: 'active', avatar: 'AA' },
        { id: 2, name: 'Sarah Connor', email: 'sarah@example.com', role: 'Editor', status: 'active', avatar: 'SC' },
        { id: 3, name: 'John Doe', email: 'john@example.com', role: 'Viewer', status: 'away', avatar: 'JD' },
        { id: 4, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', status: 'active', avatar: 'JS' },
        { id: 5, name: 'Mike Ross', email: 'mike@example.com', role: 'Viewer', status: 'inactive', avatar: 'MR' },
    ];

    private usersSubject = new BehaviorSubject<User[]>(this.initialUsers);
    users$ = this.usersSubject.asObservable();

    getUsers(): User[] {
        return this.usersSubject.value;
    }

    addUser(user: Omit<User, 'id'>): void {
        const currentUsers = this.usersSubject.value;
        const newId = currentUsers.length > 0 ? Math.max(...currentUsers.map(u => u.id)) + 1 : 1;
        const newUser = { ...user, id: newId };
        this.usersSubject.next([...currentUsers, newUser]);
    }

    updateUser(updatedUser: User): void {
        const currentUsers = this.usersSubject.value;
        const index = currentUsers.findIndex(u => u.id === updatedUser.id);
        if (index !== -1) {
            const newUsers = [...currentUsers];
            newUsers[index] = updatedUser;
            this.usersSubject.next(newUsers);
        }
    }

    deleteUser(id: number): void {
        const currentUsers = this.usersSubject.value;
        this.usersSubject.next(currentUsers.filter(u => u.id !== id));
    }
}
