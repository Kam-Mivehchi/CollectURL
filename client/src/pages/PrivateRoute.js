import React from "react"
import { Navigate } from "react-router-dom"
import { useAuth } from "../Utils/UserContext"

export default function PrivateRoute({ children }) {


   return localStorage.getItem('token') ? children : <Navigate to="/login" />;
}