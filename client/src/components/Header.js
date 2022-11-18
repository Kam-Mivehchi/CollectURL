import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, Container } from './styles/Utilities.styles.js'
const NavBar = () => {
   return (

      <Container>
         <Nav>
            <a href="">Brand</a>
            <Link to='/'>
               Home
            </Link>
         </Nav>
      </Container>

   )
}

export default NavBar