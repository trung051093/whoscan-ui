import { UserProfile } from "./user-profile.model";

export interface LoginRequest {
    username: string;
    password: string;
}

export interface LoginResponse {
    user: UserProfile;
    access_token: string;
    exp: number;
}