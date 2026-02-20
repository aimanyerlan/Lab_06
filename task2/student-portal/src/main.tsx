import React from 'react';
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Layout from "./Layout.tsx";
import Home from "./Home.tsx";
import Courses from "./Courses.tsx";
import About from "./About.tsx";
import NotFound from "./NotFound.tsx";
import CourseDetail from "./CourseDetail.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "courses", element: <Courses /> },
      { path: "courses/:id", element: <CourseDetail />, errorElement: <p>Course not found</p>, 
        loader: async ({params})=> {
          const {getCourseById} = await import("./data");
          const course = getCourseById(Number(params.id));
          if (!course) {
            throw new Error("Course not found");
          }
          return {course};
        },
      },
      { path: "about", element: <About /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
