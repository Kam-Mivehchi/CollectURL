import React, { useState, useRef } from 'react'
import { motion } from "framer-motion"
import { useTheme } from 'styled-components'
import { AuthContainer, AuthenticationForm, Button } from "../components/styles/Utilities.styles"
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

   const [user, dispatch] = useUserContext();



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
      console.log(user)
      navigate('/dashboard')
   }


   return (
      <AuthContainer
         as={motion.div}
         animate={{ opacity: [0, 1,], x: [-100, 0] }}
         transition={{ ease: "easeOut", duration: 1 }}>
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
      </AuthContainer >
   )
}

export default Signup