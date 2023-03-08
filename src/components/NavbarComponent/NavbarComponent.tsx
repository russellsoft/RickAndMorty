import React from "react";
import { NavbarContainer } from "./styled";
import { LogoSvg } from "../../icons";
import { Link, Outlet } from "react-router-dom";
import { routerPath } from "../../router/routerPath";

export const NavbarComponent = () => {
  return (
    <div>
      <NavbarContainer>
        <div className="logo-box">
          <LogoSvg />
        </div>
        <ul>
          <li>
            <Link to={routerPath.homepage}>Главная</Link>
          </li>
          <li>
            <Link to={routerPath.about}>Обо мне</Link>
          </li>
        </ul>
      </NavbarContainer>

      <Outlet />
    </div>
  );
};
