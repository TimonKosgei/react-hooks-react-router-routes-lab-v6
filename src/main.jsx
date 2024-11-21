import "./index.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";

const router = createBrowserRouter(routes)

function App(){
    return(
        <RouterProvider router={router} />
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
