interface PostParams {
  _page: number;
  _limit: number;
  userId: number | null;
  q: string;
  _embed: string;
  _expand: string;
}

export default PostParams;
