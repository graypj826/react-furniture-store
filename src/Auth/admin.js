import React, { Component } from 'react';
import ItemContainer from '../Admin/ItemContainer/itemContainer';
import { 
    
  Button, 
  Modal, 
  ModalHeader, 
  ModalBody, 
  ModalFooter,
  Container, 
  Row, 
  Col

} from 'reactstrap';

class Admin extends Component {
  // calls the login method in authentication service
  login = () => {
    this.props.auth.login();
  }
  // calls the logout method in authentication service
  logout = () => {
    this.props.auth.logout();
  }
  render() {
    // calls the isAuthenticated method in authentication service
    return (
      <div>
        <ItemContainer /> 
      </div>
      );
    }
  }

  export default Admin;