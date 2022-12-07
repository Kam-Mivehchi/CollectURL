import axios from 'axios'
import { useNavigate } from "react-router-dom"

export async function createUser(username, email, password) {

   try {
      const response = await axios.post('http://localhost:3001/api/users/register', { username: username, email: email, password: password })
      console.log(response.data)
      localStorage.setItem('token', response.data.token)


      return response.data
   } catch (error) {
      console.error(error)
   }
}

export function logout() {
   localStorage.setItem('token', '')
   useNavigate.navigate('/')

}