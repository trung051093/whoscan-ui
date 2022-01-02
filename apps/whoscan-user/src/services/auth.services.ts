import { API_PATH } from "../common";
import { ForgotPasswordRequest, LoginRequest, LoginResponse, ResetPasswordRequest, SignUpRequest, SignUpResponse } from "../models";
import { BaseService } from "./base.services";

interface IAuthServices {
    login: (payload: LoginRequest) => Promise<LoginResponse>;
    logout: () => Promise<any>;
    register: (payload: SignUpRequest) => Promise<SignUpResponse>;
    forgotPassword: (payload: ForgotPasswordRequest) => Promise<boolean>;
    resetPassword: (payload: ResetPasswordRequest) => Promise<boolean>;
}

export class AuthServices extends BaseService implements IAuthServices {
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor() {
        super();
    }

    login(payload: LoginRequest) {
        return super.post(API_PATH.AUTH_LOGIN, payload);
    }

    logout() {
        return super.post(API_PATH.AUTH_LOGOUT, {});
    }

    register(payload: SignUpRequest) {
        return super.post(API_PATH.AUTH_REGISTER, payload);
    }

    forgotPassword(payload: ForgotPasswordRequest) {
        return super.post(API_PATH.AUTH_FORGOT_PASSWORD, payload);
    }

    resetPassword(payload: ResetPasswordRequest) {
        return super.post(API_PATH.AUTH_RESET_PASSWORD, payload);
    }
}