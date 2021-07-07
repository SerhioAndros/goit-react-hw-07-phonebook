import React from "react";
import { connect } from "react-redux";

import Navigation from "./Navigation";
import UserMenu from "./UserMenu";
import AuthNav from "./AuthNav";
import { getIsAuthenticated } from "../../redux/auth/auth-selector";

const AppBar = ({ isAuthenticated }) => (
  <header>
    <Navigation />
    {isAuthenticated ? <UserMenu /> : <AuthNav />}
  </header>
);

const mapStateToProps = (state) => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps, null)(AppBar);
