import type userType from "../models/UserType";
import { useUsersApiService } from "./index";
import { useQuery } from "react-query";

interface UseUsers {
  users: userType[] | undefined;
}
const useUsers = (): UseUsers => {
  const service = useUsersApiService();
  const { data: users } = useQuery(["users"], async () => await service.get(), {
    refetchOnWindowFocus: false,
  });
  return { users };
};

export default useUsers;
