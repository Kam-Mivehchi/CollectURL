import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, Container, HomeIcon } from './styles/Utilities.styles.js'
import { AiOutlineHome } from "react-icons/ai";
const NavBar = ({ theme, setTheme, options }) => {
   return (

      <Container>
         <Nav>
            <a href="">Brand</a>
            <div>

               <Link to='/'>
                  <HomeIcon />
                  <span className="hidden md:inline">Home</span>
               </Link>
               <label class="switch">
                  <input type="checkbox" onChange={() => setTheme(theme == options.light ? options.dark : options.light)} />
                  <span class="slider round"></span>
               </label>
            </div>
         </Nav>
      </Container>

   )
}

export default NavBar