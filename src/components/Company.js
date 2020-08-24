import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { company } from "../actions/companyaction";

class Company extends React.Component {
  state = {
    name: "",
    address: "",
    phone: "",
    location: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const res = await this.props.submitCompany({
      name: this.state.name,
      address: this.state.address,
      phone: this.state.phone,
      location: this.state.location,
    });
    this.setState({
      name: "",
      address: "",
      phone: "",
      location: "",
    });
  };

  render() {
    console.log("this.state", this.props);
    return (
      <div>
        <div className="login-form">
          <form method="post">
            <h2 className="text-center">Create Company</h2>
            <div className="form-group">
              <input
                value={this.state.name}
                onChange={this.handleChange}
                type="text"
                className="form-control"
                placeholder="Name"
                required="required"
                name="name"
              />
            </div>
            <div className="form-group">
              <input
                value={this.state.address}
                onChange={this.handleChange}
                type="text"
                className="form-control"
                placeholder="Address"
                required="required"
                name="address"
              />
            </div>
            <div className="form-group">
              <input
                value={this.state.phone}
                onChange={this.handleChange}
                type="text"
                className="form-control"
                placeholder="Phone"
                required="required"
                name="phone"
              />
            </div>
            <div className="form-group">
              <input
                value={this.state.location}
                onChange={this.handleChange}
                type="password"
                className="form-control"
                placeholder="Location"
                required="required"
                name="location"
              />
            </div>
            <div className="form-group">
              <button
                onClick={this.handleSubmit}
                type="submit"
                className="btn btn-primary btn-block"
              >
                Log in
              </button>
            </div>
            <div className="clearfix">
              <label className="pull-left checkbox-inline">
                <input type="checkbox" /> Remember me{" "}
              </label>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    company: state.company,
  };
}

export default connect(mapStateToProps, { submitCompany: company })(Company);
