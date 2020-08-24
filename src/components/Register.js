import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
//import { register } from "../reducers/Registerreducer";
import { connect } from "react-redux";
import { register } from "../actions/companyaction";

class Register extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const res = await this.props.registerUser({
      username: this.state.name,
      pass: this.state.password,
      email: this.state.email,
    });
    this.setState({
      name: "",
      email: "",
      password: "",
    });
  };

  render() {
    console.log("this.props", this.props);
    return (
      <div>
        {/* <div>
                    <img src="/images/background.png" style={{ width: "500px", height: "500px" }} />
                </div> */}
        <div className="login-form">
          <form method="post">
            <h2 className="text-center">Create Employee</h2>
            <div className="form-group">
              <input
                value={this.state.name}
                name="name"
                onChange={this.handleChange}
                type="text"
                className="form-control"
                placeholder="Username"
                required="required"
              />
            </div>
            <div className="form-group">
              <input
                value={this.state.email}
                name="email"
                onChange={this.handleChange}
                type="text"
                className="form-control"
                placeholder="Email"
                required="required"
              />
            </div>
            <div className="form-group">
              <input
                value={this.state.password}
                name="password"
                onChange={this.handleChange}
                type="password"
                className="form-control"
                placeholder="PassWord"
                required="required"
              />
            </div>
            <div className="form-group">
              <button
                onClick={this.handleSubmit}
                type="submit"
                className="btn btn-primary btn-block"
              >
                <Link to="/register">Register</Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    register: state.register,
  };
}

export default connect(mapStateToProps, { registerUser: register })(Register);
