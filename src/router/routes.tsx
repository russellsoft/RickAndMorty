import React from 'react';
import { RoutePathsType } from "./types";
import { routerPath } from "./routerPath";
import HomePage from "../pages/HomePage";
import { AboutMe } from "../pages/AboutMePage/AboutMe";

export const routes: RoutePathsType = [
  {
    path: routerPath.homepage,
    name: "Главная страница",
    Component: <HomePage />,
  },
  {
    path: routerPath.about,
    name: "Обо мне",
    Component: <AboutMe />,
  },
];
