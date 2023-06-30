import type { PostsApiService } from "../services/PostsApiService";
import postsApiService from "../services/PostsApiService";

const usePostsApiService = (): PostsApiService => postsApiService;

export default usePostsApiService;
