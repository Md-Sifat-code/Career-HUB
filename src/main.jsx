import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout";
import Error from "./Components/Error";
import Home from "./Components/Home";
import Applied from "./Components/Applied";
import Blog from "./Components/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        loader: async () => {
          const [categoriesResponse, jobsResponse] = await Promise.all([
            fetch("/public/data/categories.json"),
            fetch("/public/data/jobs.json"),
          ]);

          const categories = await categoriesResponse.json();
          const jobs = await jobsResponse.json();

          return { categories, jobs };
        },
        element: <Home />,
      },
      {
        path: "/applied-jobs",
        element: <Applied></Applied>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
