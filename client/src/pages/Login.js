import React, { useState, useRef } from 'react'
import { useTheme } from 'styled-components'
import { AuthContainer, AuthenticationForm, Button } from "../components/styles/Utilities.styles"
import { useUserContext } from '../Utils/UserContext'
import { AUTHENTICATE } from '../Utils/actions'
import { login } from "../Utils/API"
import { useNavigate, Link } from "react-router-dom"
import { motion } from "framer-motion"

const Login = () => {
   const navigate = useNavigate()
   const theme = useTheme();
   const emailInputElement = useRef();
   const passwordInputElement = useRef();
   const [dispatch] = useUserContext();
   const [error, setError] = useState("")



   const formHandler = async (event) => {
      event.preventDefault();
      try {

         const data = await login(

            emailInputElement.current?.value,
            passwordInputElement.current?.value
         )
         dispatch({
            type: AUTHENTICATE,
            payload: {
               token: data.token,
               ...data.user
            },
         })
         navigate('/dashboard')
         setError("")
      } catch (error) {

         setError("Password or Username is incorrect")
      }


   }
   return (
      <AuthContainer
         as={motion.div}
         animate={{ opacity: [0, 1,], x: [-100, 0] }}
         transition={{ ease: "easeOut", duration: 1 }} >
         <AuthenticationForm onSubmit={formHandler}>
            <h2>Login</h2>


            <label>
               Email
               <input
                  ref={emailInputElement}
                  id="email"
                  placeholder="Email"
                  type="email"
                  required
               />

            </label>

            <label >
               Password
               <input
                  ref={passwordInputElement}
                  id="password"
                  placeholder="Password"
                  type="password"
                  required
               />


            </label>
            <div>

               <small>{error}</small>
            </div>

            <Button bg={theme.colors.accent} color={theme.colors.cardBackground} type="submit" >
               Submit
            </Button>
            <p>Don't have an Account? <Link to="/signup">Sign Up</Link></p>
         </AuthenticationForm >
      </AuthContainer >
   )
}

export default Login