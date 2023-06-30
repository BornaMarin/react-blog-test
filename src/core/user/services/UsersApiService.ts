import { apiService } from "../../api/services";
import type { UserType } from "../models";

export class UsersApiService {
  async get(): Promise<UserType[]> {
    return apiService.responseHandler(
      await apiService.get<UserType[]>("/users")
    );
  }
}

const usersApiService = new UsersApiService();

export default usersApiService;
