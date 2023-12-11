import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import AboutMe from "../Pages/AboutMe/AboutMe";
import Skills from "../Pages/Skills/Skills";
import Experiences from "../Pages/Experiences/Experiences";
import Projects from "../Pages/Projects/Projects";
import Contact from "../Pages/Contact/Contact";

const myCreateRoutes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "about",
          element: <AboutMe></AboutMe>,
        },
        {
          path: "skills",
          element: <Skills></Skills>,
        },
        {
          path: "experiences",
          element: <Experiences></Experiences>,
        },
        {
          path: "projects",
          element: <Projects></Projects>
        },
        {
          path: "contact",
          element: <Contact></Contact>
        }
    ]
    },
  ]);
  export default myCreateRoutes;

