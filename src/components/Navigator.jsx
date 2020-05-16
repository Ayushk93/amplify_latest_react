import React, { Component } from 'react';
import { Navbar, Nav, BSpan } from 'bootstrap-4-react';

export default class Navigator extends Component {
  render() {
    return (
      <Navbar expand="md" dark bg="dark" fixed="top">
        <Navbar.Brand href="#">Navbar</Navbar.Brand>
        <Navbar.Toggler target="#navbarsExampleDefault" />

        <Navbar.Collapse id="navbarsExampleDefault">
          <Navbar.Nav mr="auto">
            <Nav.ItemLink href="/home" active> Home <BSpan srOnly>(current)</BSpan>
            </Nav.ItemLink>
            <Nav.ItemLink href="/signin">Sign In</Nav.ItemLink>
            <Nav.ItemLink href="/signup">Sign Up</Nav.ItemLink>
          </Navbar.Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
