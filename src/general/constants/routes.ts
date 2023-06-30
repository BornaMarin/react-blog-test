import { RoutesEnum } from "general/enums";
import type { Route } from "general/models";

const routes: Route[] = [
  {
    path: RoutesEnum.POSTS,
    name: "posts",
  },
  {
    path: RoutesEnum.POST,
    name: "post",
  },
  {
    path: RoutesEnum.NOT_FOUND,
    name: "not_found",
  },
];

export default routes;
