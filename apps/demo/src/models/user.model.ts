export interface User {
    id: number;
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    company: string;
    birthDate: string;
    gender: string;
    phoneNumber: string;
}

export interface CreateUserDto {
    firstName: string;
    lastName: string;
    email: string;
    address?: string;
    company?: string;
    birthDate?: string;
    gender?: string;
    phoneNumber?: string;
}

export interface UpdateUserDto {
    firstName?: string;
    lastName?: string;
    email?: string;
    address?: string;
    company?: string;
    birthDate?: string;
    gender?: string;
    phoneNumber?: string;
}
