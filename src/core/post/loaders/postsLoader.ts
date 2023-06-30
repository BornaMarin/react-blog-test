import queryClient from "../../root/components/ReactQueryProvider/queryClient";
import type { PostParams } from "../models";
import type { PostType } from "../models";
import postsQuery from "../querys/postsQuery";
import type { LoaderFunction, LoaderFunctionArgs } from "react-router-dom";

const postsLoader: ({ params }: { params: PostParams }) => Promise<unknown> =
  async ({ params }: { params: PostParams }) => {
    const query = postsQuery(params);
    return (
      queryClient.getQueryData(query.queryKey) ??
      (await queryClient.fetchQuery(query))
    );
  };

export default postsLoader;
