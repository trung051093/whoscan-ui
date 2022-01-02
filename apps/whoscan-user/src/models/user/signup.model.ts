import { UserProfile } from "../../models";

export interface SignUpRequest {
    email: string;
    first_name: string;
    last_name: string;
    password: string;
}

export interface SignUpResponse {
    user: UserProfile;
    access_token: string;
    exp: number;
}