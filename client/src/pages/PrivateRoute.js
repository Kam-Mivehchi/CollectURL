import React from "react"
import { Navigate } from "react-router-dom"
// TODO this needs to check the expiration of the token
import { loggedIn } from '../Utils/API'



export default function PrivateRoute({ children }) {


   return loggedIn() ? children : <Navigate to="/login" />;
}