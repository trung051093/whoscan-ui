import { API_PATH } from "../common";
import { IBaseListingModel, Social } from "../models";
import { BaseService } from "./base.services";
import querystring from "query-string";

interface ISocialServices {
    getSocials: () => Promise<IBaseListingModel<Social>>;
}

export class SocialServices extends BaseService implements ISocialServices {
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor() {
        super();
    }

    getSocials(page?: number, limit?: number): Promise<IBaseListingModel<Social>> {
        return super.get(querystring.stringifyUrl({
            url: API_PATH.SOCIAL,
            query: {
                page,
                limit
            }
        }));
    }
}