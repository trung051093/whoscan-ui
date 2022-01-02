import { Photo } from "./photo.model";
import { UserSocial } from "./user-social.model";

export interface UserProfile {
    id?: string;
    first_name?: string;
    last_name?: string;
    full_name?: string;
    display_name?: string;
    description?: string;
    email?: string;
    phone?: string;
    active?: boolean;
    default_language?: string;
    profile_facebook_id?: string;
    profile_google_id?: string;
    role?: string;
    socials?: UserSocial[];
    avatar?: Photo;
    cover?: Photo;
}