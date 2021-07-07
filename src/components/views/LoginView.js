import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../../redux/auth/auth-operations";

class LoginView extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onLogin(this.state);
    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div>
        <h1>Залогинься!!!</h1>

        <form onSubmit={this.handleSubmit}>
          <label>
            Мейл
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>

          <label>
            Пароль (никому не говорил же?)
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>

          <button type="submit">Погнали!</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onLogin: (data) => dispatch(login(data)),
});

export default connect(null, mapDispatchToProps)(LoginView);
