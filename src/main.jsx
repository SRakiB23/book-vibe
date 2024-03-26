import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import ListedBooks from "./components/ListedBooks/ListedBooks";
import PagesToRead from "./components/PagesToRead/PagesToRead";
import Root from "./components/Root/Root";
import BookDetails from "./components/BookDetails/BookDetails";
import UpcomingBooks from "./components/UpcomingBooks/UpcomingBooks";
import AboutUs from "./components/AboutUs/AboutUs";
import ErrorPage from "./components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/book/:bookId",
        element: <BookDetails></BookDetails>,
        loader: () => fetch("/bookData.json"),
      },
      {
        path: "/listedbooks",
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch("/bookData.json"),
      },
      {
        path: "/pagestoread",
        element: <PagesToRead></PagesToRead>,
        loader: () => fetch("/bookData.json"),
      },
      {
        path: "/upcomingbooks",
        element: <UpcomingBooks></UpcomingBooks>,
      },
      {
        path: "/aboutus",
        element: <AboutUs></AboutUs>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
