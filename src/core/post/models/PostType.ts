import type { Entity } from "../../../general/models";
import type { UserType } from "../../user/models";
import type Expandable from "./Expandable";
import type { CommentType } from "./index";

interface PostType extends Entity<number>, Expandable {
  userId: number;
  title: string;
  body: string;
  user: UserType;
  comments: CommentType[];
}

export default PostType;
