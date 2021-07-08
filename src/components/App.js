import React, { Component } from "react";
import ContactsView from "./views/ContactsView";
import { Switch } from "react-router-dom";
import AppBar from "./appBar/AppBar";
import HomeView from "./views/HomeView";
import RegistrationView from "./views/RegistrationView";
import LoginView from "./views/LoginView";
import { connect } from "react-redux";
import { getCurrUser } from "../redux/auth/auth-operations";
import PublicRoute from "./routs/PublicRoute";
import PrivateRoute from "./routs/PrivateRoute";

class App extends Component {
  componentDidMount() {
    this.props.onRefresh();
  }

  render() {
    return (
      <div>
        <AppBar />
        <Switch>
          <PublicRoute exact path="/" component={HomeView} />
          <PublicRoute
            path="/register"
            redirectTo="/contacts"
            restricted
            component={RegistrationView}
          />
          <PublicRoute
            path="/login"
            redirectTo="/contacts"
            restricted
            component={LoginView}
          />
          <PrivateRoute
            path="/contacts"
            redirectTo="/login"
            component={ContactsView}
          />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onRefresh: () => dispatch(getCurrUser()),
});

export default connect(null, mapDispatchToProps)(App);
