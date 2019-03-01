import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../../context";

export default class Contacts extends Component {
  

  render() {
    return (
      <Consumer>
         {value => {
          const { contacts } = value;
          return (
            <div>
              <h3 className='mb-3'>Contact List</h3>
              {contacts.map(contact => (
                <Contact
                  key={contact.id}
                  contact={contact}                  
                />
              ))}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
