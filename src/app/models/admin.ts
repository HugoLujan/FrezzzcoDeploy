export type Roles = 'ADMIN';
export interface UserModel {
    username: string;
    password: string;
}

export interface UserResponse{
    message: string;
    token: string;
    userId: string;
    role: Roles;
}