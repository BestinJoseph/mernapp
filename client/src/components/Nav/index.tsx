import React from 'react'
import { Navbar, NavItem, NavLink } from 'react-bootstrap'

const Nav = () => {
    return (
        <Navbar>
            <NavItem>
                <NavLink href="/home">Home</NavLink>
            </NavItem>
        </Navbar>
    )
}

export default Nav
