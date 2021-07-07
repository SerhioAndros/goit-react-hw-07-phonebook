import React from "react";
import ContactsView from "./views/ContactsView";
import { Switch, Route } from "react-router-dom";
import AppBar from "./appBar/AppBar";
import HomeView from "./views/HomeView";
import RegistrationView from "./views/RegistrationView";
import LoginView from "./views/LoginView";

const App = () => (
  <div>
    <AppBar />
    <Switch>
      <Route exact path="/" component={HomeView} />
      <Route path="/register" component={RegistrationView} />
      <Route path="/login" component={LoginView} />
      <Route path="/contacts" component={ContactsView} />
    </Switch>
  </div>
);

export default App;
