import React, { useState } from 'react';
import Link from 'next/link';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';

const BsNavLink = props => {
    const { href, title } = props;
    return (
        <Link href={href}>
            <a className="nav-link port-navbar-link">{title}</a>
        </Link>
    )
  }

const Login = () =>
  <span className = "nav-link port-navbar-link clickable">Login</span>

const Logout = () =>
  <span className = "nav-link port-navbar-link clickable">Logout</span>

const BootstrapNavBrand = () => 
  <Link href = "/">
    <a className = "navbar-brand port-navbar-brand">Monit Patel</a>
  </Link>

  
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
          <Navbar
            className="port-navbar port-default absolute"
            color="transparent"
            dark
            expand="md">
            <BootstrapNavBrand />
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem className="port-navbar-item">
                  <BsNavLink href="/" title="Home"/>
                </NavItem>
                <NavItem className="port-navbar-item">
                  <BsNavLink href="/about" title="About"/>
                </NavItem>
                <NavItem className="port-navbar-item">
                  <BsNavLink href="/portfolios" title="Portfolios"/>
                </NavItem>
                <NavItem className="port-navbar-item">
                  <BsNavLink href="/blogs" title="Blogs"/>
                </NavItem>
                <NavItem className="port-navbar-item">
                  <BsNavLink href="/resume" title="Resume"/>
                </NavItem>
              </Nav>

              <Nav navbar>
                <NavItem className = "port-navbar-item">
                  <Login />
                </NavItem>

                <NavItem className = "port-navbar-item">
                  <Logout />
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }
    
    export default Header;
 /*   
export default class Header extends React.Component {

    state = { isOpen: false }
    toggle = () => this.setState({isOpen: !this.state.isOpen})

    render() {
        const { isOpen } = this.state;
        return (
            <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Filip Jerga</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <BsNavLink route="/" title="Home"/>
              </NavItem>
              <NavItem>
                <BsNavLink route="/about" title="About"/>
              </NavItem>
              <NavItem>
                <BsNavLink route="/portfolios" title="Portfolios"/>
              </NavItem>
              <NavItem>
                <BsNavLink route="/blogs" title="Blogs"/>
              </NavItem>
              <NavItem>
                <BsNavLink route="/cv" title="Cv"/>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
*/