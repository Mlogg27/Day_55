import { createBrowserRouter } from "react-router-dom";
import { HomePage, ListPage, SearchPage, UpdateJobPage } from "../Page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/list",
    element: <ListPage/>
  },
  {
    path: "/update",
    element: <UpdateJobPage/>
  },
  {
    path: "/search",
    element: <SearchPage/>
  }
]);
export default router;
