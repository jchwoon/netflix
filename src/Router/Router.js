import { createBrowserRouter } from "react-router-dom";
import Home from "../Componet/Home";
import Search from "../Componet/Search";
import Tv from "../Componet/Tv";
import Root from "../Root";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "", element: <Home /> },
      {
        path: "tv",
        element: <Tv />,
      },
      { path: "search", element: <Search /> },
    ],
  },
]);

export default route;
