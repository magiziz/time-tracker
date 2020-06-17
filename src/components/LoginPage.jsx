import React, { Component } from "react";
import Input from "./functions/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      account: { username: "", password: "" },
      errors: {},
    };
  }

  validate = () => {
    const errors = {};
    const { account } = this.state;
    if (account.username.trim() === "") {
      errors.username = "Username is required";
    }
    if (account.password.trim() === "") {
      errors.password = "Password is required";
    }
    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    console.log(errors);
    this.setState({ errors: errors || {} });
  };

  validateProperty = ({ name, value }) => {
    if (name === "username") {
      if (value.trim() === "") return "Username is required";
    }
    if (name === "password") {
      if (value.trim() === "") return "Password is required";
    }
  };

  onChangeHandle = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors });
  };

  render() {
    const { account, errors } = this.state;

    return (
      <section className="LoginForm">
        <div className="container">
          <div className="formSubmit">
            <div className="logoForm">
              <FontAwesomeIcon icon={faGoogle} />
            </div>
            <h1 className="text-center">Sign in to Account</h1>
            <form onSubmit={this.handleSubmit}>
              <Input
                value={account.username}
                onChange={this.onChangeHandle}
                name="username"
                type="text"
                label="Username:"
                error={errors.username}
                placeholder="Type your username..."
              />
              <Input
                value={account.password}
                onChange={this.onChangeHandle}
                name="password"
                type="password"
                label="Password:"
                placeholder="Type your password..."
                error={errors.password}
              />
              <p
                className="forgotPassword text-right"
                style={{ cursor: "pointer" }}
              >
                Forgot your password?
              </p>
              <button className="btn btnForm text-center mt-4">Sign in</button>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default Login;
