import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, Container, HomeIcon } from './styles/Utilities.styles.js'
import { AiOutlineHome } from "react-icons/ai";
const NavBar = () => {
   return (

      <Container>
         <Nav>
            <a href="">Brand</a>
            <Link to='/'>
               <HomeIcon />
               <span className="hidden md:inline">Home</span>
            </Link>
         </Nav>
      </Container>

   )
}

export default NavBar