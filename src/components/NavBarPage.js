import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown, MenuItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import styles from './NavBarPage.scss'

@connect(state => ({
  projects: state.projects,
  projectList: state.projectList
}))
export default class NavBarPage extends Component {
  render () {
    const { projectList, projects } = this.props

    return <div>
      <Navbar fluid fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to='/'>SNAG</Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavDropdown title='Projects' id='basic-nav-dropdown'>
            {projectList.map(projectId =>
              <LinkContainer to={'/project/' + projectId}>
                <MenuItem key={projectId}>{projects[projectId].name}</MenuItem>
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
