import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./(Components)/Error.jsx";
import Home from "./Home/Home.jsx";
import About from "./About/About.jsx";
import Service from "./Service/Service.jsx";
import Contact from "./Contact/Contact.jsx";
import Product from "./Product/Product.jsx";
import Gallery from "./Gallery/Gallery.jsx";
import Ingots from "./Ingots/Ingots.jsx";
import Quote from "./(Components)/Quote.jsx";
import Product1 from "./Product/Product1.jsx";
import Product2 from "./Product/Product2.jsx";
import Product3 from "./Product/Product3.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <Error />,
      },
      {
        path: "/service",
        element: <Service />,
        errorElement: <Error />,
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <Error />,
      },
      {
        path: "/product1",
        element: <Product />,
        errorElement: <Error />,
      },
      {
        path: "/product2",
        element: <Product1 />,
        errorElement: <Error />,
      },
      {
        path: "/product3",
        element: <Product3 />,
        errorElement: <Error />,
      },
      {
        path: "/product4",
        element: <Product2 />,
        errorElement: <Error />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
        errorElement: <Error />,
      },
      {
        path: "/ingots",
        element: <Ingots />,
        errorElement: <Error />,
      },
      {
        path: "/quote",
        element: <Quote />,
        errorElement: <Error />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
