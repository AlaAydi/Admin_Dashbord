import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService, User } from '../../services/user.service';

@Component({
    selector: 'app-users',
    standalone: true,
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    templateUrl: './users.component.html',
    styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {
    users: User[] = [];
    showModal = false;
    isEditing = false;
    userForm: FormGroup;
    currentUser: User | null = null;

    constructor(private userService: UserService, private fb: FormBuilder) {
        this.userForm = this.fb.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            role: ['Viewer', Validators.required],
            status: ['active', Validators.required]
        });
    }

    ngOnInit(): void {
        this.userService.users$.subscribe(users => {
            this.users = users;
        });
    }

    openAddModal(): void {
        this.isEditing = false;
        this.currentUser = null;
        this.userForm.reset({ role: 'Viewer', status: 'active' });
        this.showModal = true;
    }

    openEditModal(user: User): void {
        this.isEditing = true;
        this.currentUser = user;
        this.userForm.patchValue(user);
        this.showModal = true;
    }

    closeModal(): void {
        this.showModal = false;
    }

    onSubmit(): void {
        if (this.userForm.valid) {
            const formData = this.userForm.value;
            const avatar = formData.name.split(' ').map((n: string) => n[0]).join('').toUpperCase().substring(0, 2);

            if (this.isEditing && this.currentUser) {
                this.userService.updateUser({
                    ...this.currentUser,
                    ...formData,
                    avatar
                });
            } else {
                this.userService.addUser({
                    ...formData,
                    avatar
                });
            }
            this.closeModal();
        }
    }

    onDelete(id: number): void {
        if (confirm('Are you sure you want to delete this user?')) {
            this.userService.deleteUser(id);
        }
    }
}
