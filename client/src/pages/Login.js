import React, { useState, useRef } from 'react'
import { useTheme } from 'styled-components'
import { CenteredContainer, AuthenticationForm, Button } from "../components/styles/Utilities.styles"
import { useUserContext } from '../Utils/UserContext'
import { AUTHENTICATE } from '../Utils/actions'
import { login } from "../Utils/API"
import { useNavigate } from "react-router-dom"

const Login = () => {
   const navigate = useNavigate()
   const theme = useTheme();
   const emailInputElement = useRef();
   const passwordInputElement = useRef();
   const [user, dispatch] = useUserContext();
   const [error, setError] = useState("")
   console.log(user);


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
         console.log(error)
         setError("Unable to Sign In")
      }


   }
   return (
      <CenteredContainer>
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
            <small>{error}</small>

            <Button bg={theme.colors.accent} color={theme.colors.cardBackground} type="submit" >
               Submit
            </Button>

         </AuthenticationForm >
      </CenteredContainer >
   )
}

export default Login