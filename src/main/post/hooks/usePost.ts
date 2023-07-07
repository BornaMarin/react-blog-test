import { usePostsApiService } from "../../../core/post/hooks";
import type { PostType } from "../../../core/post/models";
import type { Entity } from "../../../general/models";
import { postQueryKeys } from "../../../shared/constants";
import { useQuery } from "@tanstack/react-query";

const usePost = (entity: Entity) => {
  const service = usePostsApiService();
  const { data: post, isLoading: isPostLoading } = useQuery<PostType>(
    [postQueryKeys.post],
    async () => await service.getSingle(entity),
    {
      staleTime: 6000,
      refetchOnWindowFocus: false,
    }
  );
  return { post, isPostLoading };
};

export default usePost;
