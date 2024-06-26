import { createBrowserRouter } from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/About";
import Root from "./Root";
import NotFound from "./screens/NotFound";
import ErrorComponent from "./components/ErrorComponent";
import User from "./screens/User";
import Followers from "./screens/Followers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
        errorElement: <ErrorComponent />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "user/:id",
        element: <User />,
        children: [
          {
            path: "followers",
            element: <Followers />
          }
        ]
      }
    ],
    errorElement: <NotFound />
  },
]);

export default router;