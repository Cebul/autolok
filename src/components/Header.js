import React, {Component} from 'react'
import logo from '../images/logo.png'
import {Collapse, Nav, Navbar,NavbarBrand, NavbarToggler, NavItem, NavLink} from 'reactstrap'
import {Link} from 'react-router-dom'
import '../styles/_header.css'

class Header extends Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false
    }
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  } //function to toggle menu on mobile devices

  render() {
    return (
      <div className="header-container">
        <Link to="/">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </Link>
        <Navbar light expand="sm">
        <NavbarBrand />
        <NavbarToggler onClick={this.toggle} />
         <Collapse isOpen={this.state.isOpen} navbar>
           <Nav navbar className="my-nav">
             <NavItem className="my-nav-item">
               <NavLink tag={Link} onClick={(this.state.isOpen) ? this.toggle : null} to="/about">O NAS</NavLink>
             </NavItem>
             <NavItem className="my-nav-item">
               <NavLink tag={Link} onClick={(this.state.isOpen) ? this.toggle : null} to="/skicams">OFERTA</NavLink>
             </NavItem>
             <NavItem className="my-nav-item">
               <NavLink tag={Link} onClick={(this.state.isOpen) ? this.toggle : null} to="/contact">KONTAKT</NavLink>
             </NavItem>
           </Nav>
         </Collapse>
        </Navbar>
      </div>
    ) // return
  } //render
} //Header

export default Header
