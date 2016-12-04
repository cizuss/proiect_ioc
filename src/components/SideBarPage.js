import React, { Component } from 'react'

import { Nav, NavItem, Grid, Row, Col } from 'react-bootstrap'

import styles from './NavBarPage.scss'

export default class SideBarPage extends Component {
  render () {
    return <Grid>
      <Row>
        <Col xs={2} md={2}>
          <Nav bsStyle='pills' stacked>
            <NavItem>Create Issue</NavItem>
            <NavItem>Asignee</NavItem>
            <NavItem>Sprint</NavItem>
          </Nav>
        </Col>
        <Col xs={10} md={10}>
          <div className={styles.content}>
            {this.props.children}
          </div>
        </Col>
      </Row>
    </Grid>
  }
}
