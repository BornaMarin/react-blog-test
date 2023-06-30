import { usersApiService } from "../services";
import type { UsersApiService } from "../services/UsersApiService";

const useUsersApiService = (): UsersApiService => usersApiService;

export default useUsersApiService;
