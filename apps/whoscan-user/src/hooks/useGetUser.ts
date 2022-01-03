import { useQuery } from "react-query";
import { QUERY_KEYS } from "../common/constants/query";
import { UserServices } from "../services/user.services";

const userService = new UserServices();

const useGetUser = () => {
  return useQuery(QUERY_KEYS.UserProfile, {
    queryFn: userService.getUserProfile,
  });
};

export default useGetUser;
