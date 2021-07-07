import React from "react";
import { NavLink } from "react-router-dom";

const AuthNav = () => (
  <div>
    <NavLink to="/register" exact>
      Зарегаться
    </NavLink>
    <NavLink to="/login" exact>
      Залогиниться
    </NavLink>
  </div>
);

export default AuthNav;
