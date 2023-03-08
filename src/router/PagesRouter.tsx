import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import NavbarComponent from "../components/NavbarComponent";
import { routerPath } from "./routerPath";

export const PagesRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routerPath.homepage} element={<NavbarComponent />}>
          {routes.map((el) => (
            <Route path={el.path} key={el.name} element={el.Component} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
