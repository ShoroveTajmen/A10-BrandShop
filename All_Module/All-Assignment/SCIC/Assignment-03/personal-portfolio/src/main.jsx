import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import myCreateRoutes from "./Routes/Route.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="w-full mx-auto ]">
      <RouterProvider router={myCreateRoutes} />
    </div>
  </React.StrictMode>
);
