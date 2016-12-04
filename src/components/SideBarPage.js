import React, { Component } from 'react'

import { Nav, NavItem, Col } from 'react-bootstrap'

import sideBarStyles from './SideBarPage.scss'

export default class SideBarPage extends Component {

  handleAsigneeFilter = () => {

  }

  render () {
    return <Col xs={1} md={1} fluid className={sideBarStyles.sideBarBox}>
      <Nav bsStyle='pills' stacked>
        <NavItem>Create Issue</NavItem>
        <div className={sideBarStyles.filterByBox}>
          Filter by
        </div>
        <NavItem onClick={this.handleAsigneeFilter}>Asignee</NavItem>
        <NavItem>Sprint</NavItem>
      </Nav>
    </Col>
  }
}
