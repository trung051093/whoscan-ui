import { AxiosError } from "axios";
import { useMutation, useQueryClient } from "react-query";
import { QUERY_KEYS } from "../common/constants/query";
import { LoginRequest, LoginResponse } from "../models";
import { CookieServices } from "../services";
import { AuthServices } from "../services/auth.services";
import { CookiesName } from "../common/constants/cookies";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import uris from "../common/constants/uris.common";

const authService = new AuthServices();

export const useLogin = () => {
    const { enqueueSnackbar } = useSnackbar();
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    return useMutation<LoginResponse, AxiosError, LoginRequest>((payload: LoginRequest) => authService.login(payload), {
        onSuccess: (data) => {
            CookieServices.setCookie(CookiesName.ACCESS_TOKEN, data.access_token, data.exp);
            queryClient.setQueryData(QUERY_KEYS.UserProfile, data.user);
            queryClient.setQueryData(QUERY_KEYS.AccessToken, data.access_token);
            navigate(uris.Home.DEFAULT);
        },
        onError: (error) => {
            enqueueSnackbar(error.message, { variant: "error" });
        }
    })
}