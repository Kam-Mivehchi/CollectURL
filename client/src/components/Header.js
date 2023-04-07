import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, Container, HomeIcon, LoginIcon, SignUpIcon } from './styles/Utilities.styles.js'
import { logout } from '../Utils/API'
import { useUserContext } from "../Utils/UserContext"
import Logo from './Logos-Assets/svg/logo-no-background.svg'

const NavBar = () => {
   const [user] = useUserContext();

   return (

      <Container>
         <Nav>
            <Link to='/'><img src={Logo} alt="CollectURL Logo" /></Link>
            <div>

               <Link to='/' className={`${user._id || localStorage.getItem('token') ? "hidden" : 'static'}`}>
                  <HomeIcon />
                  <span className="hidden md:inline">Home</span>
               </Link>
               <Link to='/dashboard'>
                  <SignUpIcon />
                  <span className="hidden md:inline">Dashboard</span>
               </Link>
               {user._id || localStorage.getItem('token') ?

                  <Link onClick={logout}>
                     <LoginIcon />
                     <span className="hidden md:inline">Logout</span>
                  </Link>
                  :
                  <>
                     {/* <Link to='/login'>
                        <LoginIcon />
                        <span className="hidden md:inline">Login</span>
                     </Link> */}
                     <Link to='/signup'>
                        <SignUpIcon />
                        <span className="hidden md:inline">Sign Up</span>
                     </Link>
                  </>
               }
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