import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Desktop from "pages/Desktop";
import Appeal from "pages/Appeal";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Desktop /> },
    { path: "*", element: <NotFound /> },
    { path: "/desktop", element: <Desktop /> },
    { path: "/appeal", element: <Appeal /> },
  ]);

  return element;
};

export default ProjectRoutes;
