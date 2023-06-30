import type { RoutesEnum } from "general/enums";
import type { LoaderFunction } from "react-router-dom";

interface Route {
  path: RoutesEnum;
  name: string;
  loader?: LoaderFunction;
}

export default Route;
