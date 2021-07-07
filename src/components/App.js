import React, { Component } from "react";
import ContactsView from "./views/ContactsView";
import { Switch, Route } from "react-router-dom";
import AppBar from "./appBar/AppBar";
import HomeView from "./views/HomeView";
import RegistrationView from "./views/RegistrationView";
import LoginView from "./views/LoginView";
import { connect } from "react-redux";
import { getCurrUser } from "../redux/auth/auth-operations";

class App extends Component {
  state = {};

  componentDidMount() {
    this.props.onRefresh();
  }

  render() {
    return (
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
  }
}

const mapDispatchToProps = (dispatch) => ({
  onRefresh: getCurrUser,
});

export default connect(null, mapDispatchToProps)(App);

// const App = () => (
//   <div>
//     <AppBar />
//     <Switch>
//       <Route exact path="/" component={HomeView} />
//       <Route path="/register" component={RegistrationView} />
//       <Route path="/login" component={LoginView} />
//       <Route path="/contacts" component={ContactsView} />
//     </Switch>
//   </div>
// );

// export default App;
