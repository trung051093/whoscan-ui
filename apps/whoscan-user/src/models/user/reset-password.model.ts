import { UserProfile } from "./user-profile.model";

export interface ResetPasswordRequest {
    email: string;
    password: string;
    token: string;
}

export interface ResetPasswordResponse {
    user: UserProfile;
    access_token: string;
    exp: number;
}