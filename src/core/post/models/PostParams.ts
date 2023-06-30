interface PostParams {
  _page: number;
  _limit: number;
  userId: number | null;
  search: string;
  _embed: string;
  _expand: string;
}

export default PostParams;
