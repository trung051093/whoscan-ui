import { API_PATH } from "../common";
import { BaseService } from "./base.services";

interface IPhotoService {
    upload: (file: any) => Promise<any>;
    getPhoto: (id: string) => Promise<string>;
}

export class PhotoService extends BaseService implements IPhotoService {
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor() {
        super();
    }

    upload(file: any) {
        return super.post(API_PATH.PHOTO, file);
    }

    getPhoto(id: string) {
        return super.get(API_PATH.PHOTO + '/' + id);
    }
}