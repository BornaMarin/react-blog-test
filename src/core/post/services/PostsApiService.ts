import { apiService } from "../../api/services";
import type { PostParams } from "../models";
import type Post from "../models/PostType";

export class PostsApiService {
  async get(params: PostParams): Promise<Post[]> {
    return apiService.responseHandler(
      await apiService.get<Post[]>("/posts", { params })
    );
  }
}

const postsApiService = new PostsApiService();

export default postsApiService;
