import React, { Component } from "react";
import { Consumer } from "../../context";
import TextInputGroup from "../layout/TextInputGroup";
import axios from "axios";

export default class addContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {}
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = (e, dispatch) => {
    e.preventDefault();
    const { name, email, phone } = this.state;
    if (name === "") {
      this.setState({
        errors: { name: "Name is required" }
      });
      return;
    }
    if (email === "") {
      this.setState({
        errors: { email: "email is required" }
      });
      return;
    }
    if (phone === "") {
      this.setState({
        errors: { phone: "phone is required" }
      });
      return;
    }
    const newContact = {
      name,
      email,
      phone
    };

    axios.post("https://jsonplaceholder.typicode.com/users",newContact)
    .then(res => {
      dispatch({ type: "ADD_CONTACT", payload: res.data });
      this.setState({
        name: "",
        email: "",
        phone: "",
        errors: {}
      });
    });

    this.props.history.push("/");
  };

  render() {
    const { name, email, phone, errors } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={e => this.onSubmit(e, dispatch)}>
                  <TextInputGroup
                    label={"Name"}
                    name={"name"}
                    value={name}
                    placeholder={"Enter Name"}
                    type={"text"}
                    onChange={this.onChange}
                    error={errors.name}
                  />

                  <TextInputGroup
                    label={"Email"}
                    name={"email"}
                    value={email}
                    placeholder={"Enter Email"}
                    type={"email"}
                    onChange={this.onChange}
                    error={errors.email}
                  />

                  <TextInputGroup
                    label={"Phone"}
                    name={"phone"}
                    value={phone}
                    placeholder={"Enter Phone"}
                    type={"text"}
                    onChange={this.onChange}
                    error={errors.phone}
                  />

                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-light btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
