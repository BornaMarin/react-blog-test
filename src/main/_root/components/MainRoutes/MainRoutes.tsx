import ReactQueryProvider from "../../../../core/root/components/ReactQueryProvider/ReactQueryProvider";
import { RoutesEnum } from "general/enums";
import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Post = lazy(() => import("main/post/Post"));
const Posts = lazy(() => import("main/posts/Posts"));

const MainRoutes = () => (
  <ReactQueryProvider>
    <BrowserRouter>
      <Routes>
        <Route path={RoutesEnum.POSTS} element={<Posts />} />
        <Route path={RoutesEnum.POST} element={<Post />} />
        {/*<Route*/}
        {/*  path={RoutesEnum.NOT_FOUND}*/}
        {/*  element={<Navigate to={RoutesEnum.NOT_FOUND} />}*/}
        {/*/>*/}
      </Routes>
    </BrowserRouter>
  </ReactQueryProvider>
);

export default MainRoutes;
