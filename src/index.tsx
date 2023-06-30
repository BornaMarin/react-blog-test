import "./index.scss";
import Main from "./main/Main";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

root.render(<Main />);
