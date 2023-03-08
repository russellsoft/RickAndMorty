import { RoutePathsType } from "./types";
import { routerPath } from "./routerPath";
import HomePage from "../pages/HomePage";

export const routes: RoutePathsType = [
  {
    path: routerPath.homepage,
    name: "Главная страница",
    Component: <HomePage />,
  },
  {
    path: routerPath.about,
    name: "Обо мне",
    Component: <h1>Обо мне</h1>,
  },
];
