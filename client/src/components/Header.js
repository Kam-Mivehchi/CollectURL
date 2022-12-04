import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, Container, HomeIcon, LoginIcon, SignUpIcon } from './styles/Utilities.styles.js'

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
               <Link to='/dashboard'>
                  <SignUpIcon />
                  <span className="hidden md:inline">Dashboard</span>
               </Link>
               <Link to='/login'>
                  <LoginIcon />
                  <span className="hidden md:inline">Login</span>
               </Link>
               <Link to='/signup'>
                  <SignUpIcon />
                  <span className="hidden md:inline">Sign Up</span>
               </Link>
               {/* <label class="switch">
                  <input type="checkbox" onChange={() => setTheme(theme == options.light ? options.dark : options.light)} />
                  <span class="slider round"></span>
               </label> */}
            </div>
         </Nav>
      </Container>

   )
}

export default NavBar