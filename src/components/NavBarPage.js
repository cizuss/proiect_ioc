import React, { Component } from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import styles from './NavBarPage.scss'

const projects = ['Project 1', 'Project 2']

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
            <NavItem>Dashboard</NavItem>
          </LinkContainer>
          <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
            {projects.map((project, idx) =>
              <LinkContainer to='/'>
                <MenuItem key={idx}>{project}</MenuItem>
              </LinkContainer>
            )}
          </NavDropdown>
        </Nav>
      </Navbar>
      <div className={styles.content}>
        {this.props.children}
      </div>
    </div>
  }
}
