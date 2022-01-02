import { API_PATH } from "../common";
import { UserProfile } from "../models";
import { BaseService } from "./base.services";

interface IUserServices {
    getUserProfile: () => Promise<UserProfile>;
    updateUserProfile: (payload: UserProfile) => Promise<UserProfile>;
    getVCardUrl: (id: string) => string;
    getQRCodeUrl: (
        id: string,
        options: {
            scale: number;
            margin: number;
        }
    ) => string;
}

export class UserServices extends BaseService implements IUserServices {
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor() {
        super();
    }

    getUserProfile() {
        return super.get(API_PATH.ME);
    }

    updateUserProfile(payload: UserProfile) {
        return super.patch(API_PATH.ME, payload);
    }

    getVCardUrl(id: string) {
        return `${BaseService.baseUrl}${API_PATH.VCARD}/${id}`;
    }

    getQRCodeUrl(
        id: string,
        options: {
            scale: number;
            margin: number;
        }
    ) {
        return `${BaseService.baseUrl}${API_PATH.QRCODE}/${id}?scale=${options.scale}&margin=${options.margin}`;
    }
}
