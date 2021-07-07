import React, { Component } from "react";
import { connect } from "react-redux";
import { register } from "../../redux/auth/auth-operations";

class RegistrationView extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onRegister(this.state);
    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div>
        <h1>Зарегайся!!!</h1>

        <form onSubmit={this.handleSubmit}>
          <label>
            Ник
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>

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
            Пароль (никому не говори)
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>

          <button type="submit">Зарегать</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onRegister: (data) => dispatch(register(data)),
});

export default connect(null, mapDispatchToProps)(RegistrationView);
