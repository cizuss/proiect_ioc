import React, { Component } from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import styles from './NavBarPage.scss'

export default class NavBarPage extends Component {
  render () {
    return <div>
      <Navbar fluid fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href='#'>SNAG</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <LinkContainer to='/'>
            <NavItem eventKey={1}>Link</NavItem>
          </LinkContainer>
          <NavItem eventKey={2} href='#'>Link</NavItem>
          <NavDropdown eventKey={3} title='Dropdown' id='basic-nav-dropdown'>
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
      <div className={styles.content}>
        {this.props.children}
      </div>
    </div>
  }
}
