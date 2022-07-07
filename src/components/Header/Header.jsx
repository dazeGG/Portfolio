import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Header.module.scss";

import {
  ABOUT_ROUTE,
  HOME_ROUTE,
  PAGE_404_ROUTE,
  PROJECTS_ROUTE,
} from "../../utils/consts";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={"container " + style.container}>
        <div className={style["header-wrapper"]}>
          <div className={style["header-logo"]}>
            <NavLink to={HOME_ROUTE}>dazeGG</NavLink>
          </div>
          <div className={style["header-links-for__o__for"]}>
            <div className={style["header-links"]}>
              <ul>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? style.active : null
                    }
                    to={PROJECTS_ROUTE}
                  >
                    Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? style.active : null
                    }
                    to={ABOUT_ROUTE}
                  >
                    About
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className={style["header-for__o__for"]}>
              <NavLink to={PAGE_404_ROUTE}>PAGE 404</NavLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
