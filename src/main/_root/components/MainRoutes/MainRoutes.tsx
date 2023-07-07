import ReactQueryProvider from "../../../../core/root/components/ReactQueryProvider/ReactQueryProvider";
import { PageLayout } from "../../../../general/components/PageLayout";
import { RoutesEnum } from "general/enums";
import { lazy } from "react";
import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Post = lazy(() => import("main/post/Post"));
const Posts = lazy(() => import("main/posts/Posts"));
const MainRoutes = () => (
  <ReactQueryProvider>
    <BrowserRouter>
      <Suspense fallback={null}>
        <Routes>
          <Route
            path={RoutesEnum.POSTS}
            element={
              <PageLayout>
                <Posts />
              </PageLayout>
            }
          />
          <Route
            path={RoutesEnum.POST}
            element={
              <PageLayout>
                <Post />
              </PageLayout>
            }
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </ReactQueryProvider>
);

export default MainRoutes;
