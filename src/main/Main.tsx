import MainRoutes from "./_root/components/MainRoutes/MainRoutes";
import type { FC } from "react";
import { StrictMode } from "react";

const Main: FC = () => (
  <StrictMode>
    <MainRoutes />
  </StrictMode>
);

export default Main;
