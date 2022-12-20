import React from "react"
import { Navigate } from "react-router-dom"
// TODO this needs to check the expiration of the token

export default function PrivateRoute({ children }) {


   return localStorage.getItem('token') ? children : <Navigate to="/login" />;
}