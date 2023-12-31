import { usePostsApiService } from "../../../core/post/hooks";
import type { PostType } from "../../../core/post/models";
import type { PostParams } from "../../../core/post/models";
import { postQueryKeys } from "../../../shared/constants";
import { useQuery } from "@tanstack/react-query";

const usePosts = (params: PostParams) => {
  const service = usePostsApiService();
  const { data: posts, isLoading: arePostsLoading } = useQuery<PostType[]>(
    [postQueryKeys.posts, params],
    async () => await service.get(params),
    {
      staleTime: 6000,
      refetchOnWindowFocus: false,
    }
  );
  return { posts, arePostsLoading };
};

export default usePosts;
