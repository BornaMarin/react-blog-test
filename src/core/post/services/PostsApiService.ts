import type { Entity } from "../../../general/models";
import { apiService } from "../../api/services";
import type { PostParams } from "../models";
import type PostType from "../models/PostType";

export class PostsApiService {
  async get(params: PostParams): Promise<PostType[]> {
    return apiService.responseHandler(
      await apiService.get<PostType[]>("/posts", { params })
    );
  }
  async getSingle(entity: Entity): Promise<PostType> {
    return apiService.responseHandler(
      await apiService.get<PostType>("/posts/" + entity.id, {
        params: {
          _embed: "comments",
          _expand: "user",
        },
      })
    );
  }
}

const postsApiService = new PostsApiService();

export default postsApiService;
