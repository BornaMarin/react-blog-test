import type { PostsApiService } from "../services";
import postsApiService from "../services/PostsApiService";

const usePostsApiService = (): PostsApiService => postsApiService;

export default usePostsApiService;
