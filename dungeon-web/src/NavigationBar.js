import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem, Glyphicon } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './NavigationBar.css'


const NavigationBar = (props) => {
  const { match, dm, handleLogout } = props;
  if (!match) {
    return (
      <Navbar expand="md">
      <Navbar.Brand><NavLink to="/">Dungeon</NavLink></Navbar.Brand>
        <Nav pullRight>
          <NavItem onClick={handleLogout}> Log out </NavItem>
        </Nav>
      </Navbar>
    );
  }
  return (
    <Navbar expand="md">
    <Navbar.Brand>
      <NavLink to="/">
        <Glyphicon glyph="chevron-left" />Dungeon
      </NavLink>
    </Navbar.Brand>
      <Nav navbar>
        <LinkContainer exact to={`${match.url}`}>
          <NavItem> Journey </NavItem>
        </LinkContainer>
        {
            dm
              ? (
                <LinkContainer to={`${match.url}/settings`}>
                  <NavItem> Settings </NavItem>
                </LinkContainer>
              )
              : (
                <LinkContainer to={`${match.url}/character`}>
                  <NavItem>Character</NavItem>
                </LinkContainer>
              )
        }
        <LinkContainer to={`${match.url}/moves`}>
          <NavItem>Moves</NavItem>
        </LinkContainer>
      </Nav>
      <Nav pullRight>
        <NavItem onClick={handleLogout}> Log out </NavItem>
      </Nav>
    </Navbar>
  );
};

NavigationBar.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      sessionId: PropTypes.node,
    }).isRequired,
  }),
  dm: PropTypes.bool,
  handleLogout: PropTypes.func.isRequired,
};

NavigationBar.defaultProps = {
  match: null,
  dm: null,
};

export default NavigationBar;
