import { Social } from "./social.model";

export interface UserSocial {
    social: Social;
    value: string;
    active: boolean;
    order: number
}

export interface UserSocialTemp extends UserSocial {
    isEdit?: boolean;
    isCreate?: boolean;
    isUpdate?: boolean;
}