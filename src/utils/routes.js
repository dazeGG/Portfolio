import {
  HOME_ROUTE,
  PROJECTS_ROUTE,
  PROJECT_ROUTE,
  ABOUT_ROUTE,
  PAGE_404_ROUTE,
} from "./consts";

import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Project from "../pages/Project";
import About from "../pages/About";
import Page404 from "../pages/Page404";

export const routes = [
  {
    path: HOME_ROUTE,
    Element: <Home />,
  },
  {
    path: PROJECTS_ROUTE,
    Element: <Projects />,
  },
  {
    path: PROJECT_ROUTE + "/:projectTitle",
    Element: <Project />,
  },
  {
    path: ABOUT_ROUTE,
    Element: <About />,
  },
  {
    path: PAGE_404_ROUTE,
    Element: <Page404 />,
  },
];
