/**
 *
 * NavBar
 *
 */

import React from 'react';
// import styled from 'styled-components';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
} from 'reactstrap';

// import {FormattedMessage} from 'react-intl';
// import messages from './messages';

class NavBar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <div>
        <Navbar color="primary" dark expand="md">
          <Container>
            <NavbarBrand href="/">WebDrink</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink href="/components/">Components</NavLink>
                </NavItem>
              </Nav>
              <Nav navbar className="ml-auto">
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Username
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>
                      Dashboard
                    </DropdownItem>
                    <DropdownItem>
                      Settings
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      Logout
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }

  // return (
  //   <div>
  //     <FormattedMessage {...messages.header} />
  //   </div>
  // );
  // }
}

NavBar.propTypes = {};

export default NavBar;
