import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { getIsAuthenticated } from "../../redux/auth/auth-selector";

const Navigation = ({ isAuthenticated }) => (
  <nav>
    <NavLink exact to="/">
      На главную!
    </NavLink>
    {isAuthenticated && (
      <NavLink exact to="/contacts">
        Контактики
      </NavLink>
    )}
  </nav>
);

const mapStateToProps = (state) => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
