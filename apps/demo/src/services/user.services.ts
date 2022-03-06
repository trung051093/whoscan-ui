import { API_PATH } from "../common";
import { Response, ResponsePageination, User, CreateUserDto, UpdateUserDto } from "../models";
import { BaseService } from "./base.services";
import qs from "query-string"

interface IUserServices {
    searchUser: (page: number, limit: number) => Promise<ResponsePageination<User[]>>;
    getUser: (id: number) => Promise<Response<User>>;
    updateUser: (id: number, payload: UpdateUserDto) => Promise<Response<boolean>>;
    createUser: (id: number, payload: CreateUserDto) => Promise<Response<boolean>>;
    deleteUser: (id: number) => Promise<Response<boolean>>;

}

export class UserServices extends BaseService implements IUserServices {
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor() {
        super();
    }

    searchUser(page: number, limit: number) {
        return super.get(
            qs.stringifyUrl({
                url: API_PATH.LIST_USER,
                query: {
                    page: page,
                    limit: limit
                }
            })
        );
    }

    getUser(id: number) {
        return super.get(API_PATH.GET_USER.replace('{id}', id.toString()));
    }

    updateUser(id: number, payload: UpdateUserDto) {
        return super.patch(API_PATH.UPDATE_USER.replace('{id}', id.toString()), payload);
    }

    createUser(id: number, payload: CreateUserDto) {
        return super.post(API_PATH.CREATE_USER.replace('{id}', id.toString()), payload);
    }

    deleteUser(id: number) {
        return super.delete(API_PATH.DELETE_USER.replace('{id}', id.toString()));
    }

}
