import type { PostParams } from "../models";
import postsApiService from "../services/PostsApiService";

const postsQuery = (params: PostParams) => ({
  queryKey: ["posts", params],
  queryFn: async () => {
    const posts = await postsApiService.get(params);
    if (!posts) {
      throw new Response("", {
        status: 404,
        statusText: "Not Found",
      });
    }
    return posts;
  },
});

export default postsQuery;
