import React, { Component } from 'react'

import { Nav, NavItem, Col } from 'react-bootstrap'

import sideBarStyles from './SideBarPage.scss'

const FakeNavItem = props =>
  <div className={props.className}>
    {props.children}
  </div>

export default class SideBarPage extends Component {

  handleNotImplemented = () => {
    window.alert('Not implemented. Sorry. This is just a prototype')
  }

  render () {
    return <Col xs={12} md={2} lg={1} className={sideBarStyles.sideBarBox}>
      <Nav bsStyle='pills' stacked>
        <NavItem>Create Issue</NavItem>
        <FakeNavItem className={sideBarStyles.filterByBox}>
          Filter by:
        </FakeNavItem>
        <NavItem onClick={this.handleNotImplemented}>Asignee</NavItem>
        <NavItem onClick={this.handleNotImplemented}>Sprint</NavItem>
      </Nav>
    </Col>
  }
}
