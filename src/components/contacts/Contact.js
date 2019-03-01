import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
import Axios from "axios";

export default class Contact extends Component {
  state = {
    showContactInfo: false
  };

  onDeleteClick = (dispatch, id) => {
    Axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`).then(res =>
      dispatch({ type: "DELETE_CONTACT", payload: id })
    );
  };

  onShowClick = () => {
    this.setState({
      showContactInfo: !this.state.showContactInfo
    });
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}
                {"  "}
                <i
                  className="fas fa-sort-down"
                  onClick={this.onShowClick}
                  style={{ cursor: "pointer" }}
                />
                <i
                  className="fas fa-times"
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                  onClick={() => this.onDeleteClick(dispatch, id)}
                />
              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};
