import { usePostsApiService } from "../../../core/post/hooks";
import type { PostType } from "../../../core/post/models";
import type { PostParams } from "../../../core/post/models";
import { useQuery } from "@tanstack/react-query";

interface UsePosts {
  posts: PostType[] | undefined;
  arePostsLoading: boolean;
  refetchPosts: () => void;
}

const usePosts = (params: PostParams): UsePosts => {
  const service = usePostsApiService();
  const {
    data: posts,
    isLoading: arePostsLoading,
    refetch: refetchPosts,
  } = useQuery(["posts"], async () => await service.get(params), {
    staleTime: 6000,
    refetchOnWindowFocus: false,
  });
  return { posts, arePostsLoading, refetchPosts };
};

export default usePosts;
