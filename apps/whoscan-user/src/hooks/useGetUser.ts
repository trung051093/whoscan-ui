import { AxiosError } from "axios";
import { useQuery, UseQueryOptions } from "react-query";
import { QUERY_KEYS } from "../common/constants/query";
import { UserProfile } from "../models";
import { UserServices } from "../services/user.services";

const userService = new UserServices();

const useGetUser = (options?: UseQueryOptions<UserProfile, AxiosError>) => {
  return useQuery<UserProfile, AxiosError>(QUERY_KEYS.UserProfile, {
    ...options,
    queryFn: userService.getUserProfile,
  });
};

export default useGetUser;
