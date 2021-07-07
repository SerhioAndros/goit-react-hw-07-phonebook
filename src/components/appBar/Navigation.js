import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => (
  <nav>
    <NavLink exact to="/">
      На главную!
    </NavLink>
    <NavLink exact to="/contacts">
      Контактики
    </NavLink>
  </nav>
);

export default Navigation;
