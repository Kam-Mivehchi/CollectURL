import axios from 'axios'
import { useNavigate } from "react-router-dom"

export const config = {
   headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
   }
}
export async function createUser(username, email, password) {

   try {
      const response = await axios.post('http://localhost:3001/api/users/register', { username: username, email: email, password: password })
      console.log(response.data)
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));


      return response.data
   } catch (error) {
      console.error(error)
   }
}
export async function login(email, password) {

   try {
      const response = await axios.post('http://localhost:3001/api/users/login', { email: email, password: password })
      console.log(response.data)
      localStorage.setItem('token', response.data.token);


      return response.data
   } catch (error) {
      console.error(error)
   }
}

export function logout() {
   localStorage.setItem('token', '')
   localStorage.setItem('user', JSON.stringify({ username: '', email: '', password: '', _id: '', lists: [], buckets: [] }))
   useNavigate.navigate('/')

}

export async function getBuckets() {
   try {
      //get user buckets form api 
      const response = await axios.get('http://localhost:3001/api/buckets', config)
      //call the reducer to update the state
      console.log()
      return response.data;
   } catch (error) {
      console.error(error)
   }
}