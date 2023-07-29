import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
const divContainer = document.getElementById("root") as HTMLElement;
const root = createRoot(divContainer);

root.render(<App />)
