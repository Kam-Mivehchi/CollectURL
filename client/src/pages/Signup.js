import React, { useState, useRef } from 'react'

import { useTheme } from 'styled-components'
import { CenteredContainer, AuthenticationForm, Button } from "../components/styles/Utilities.styles"
import { createUser } from "../Utils/API"
import { useNavigate, Link } from "react-router-dom"
import { useUserContext } from "../Utils/UserContext"

import { AUTHENTICATE } from '../Utils/actions';

const Signup = () => {
   const navigate = useNavigate()
   const theme = useTheme();
   const userNameInputElement = useRef();
   const emailInputElement = useRef();
   const passwordInputElement = useRef();
   const passwordConfirmationInputElement = useRef();
   const [confirm, setConfirm] = useState(false);

   const [dispatch] = useUserContext();



   const formHandler = async (event) => {

      event.preventDefault();
      const data = await createUser(
         userNameInputElement.current?.value,
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
   }


   return (
      <CenteredContainer>
         <AuthenticationForm onSubmit={formHandler}>
            <h2>Sign Up</h2>
            <label>
               Username
               <input
                  ref={userNameInputElement}
                  id="full_name"
                  placeholder="Full name"
                  type="text"
                  required
               />
            </label>


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
            <label>
               Confirm Password
               {confirm && <small>Passwords do not Match</small>}
               <input
                  ref={passwordConfirmationInputElement}
                  id="password_confirmation"
                  placeholder="Password Confirmation"
                  onChange={() => { setConfirm(passwordInputElement.current?.value !== passwordConfirmationInputElement.current?.value) }}
                  type="password"
                  required
               />
            </label>
            <Button bg={theme.colors.accent} color={theme.colors.cardBackground} type="submit" disabled={passwordInputElement.current?.value !== passwordConfirmationInputElement.current?.value || passwordConfirmationInputElement.current?.value === ''}>
               Submit
            </Button>

            <p>Already have an Account? <Link to="/login">Sign In</Link></p>
         </AuthenticationForm >
      </CenteredContainer >
   )
}

export default Signup