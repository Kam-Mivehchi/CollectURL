import axios from 'axios'
import { useNavigate } from "react-router-dom"
// import { useLocation, redirect } from 'react-router-dom';
// import { useUserContext } from "../Utils/UserContext"
import decode from 'jwt-decode';
const baseURL = process.env.PRODURL || 'http://localhost:3001'
export function loggedIn() {
   // Checks if there is a saved token and it's still valid
   let token = localStorage.getItem('token');

   return !!token && !isTokenExpired(token); // handwaiving here
}

// check if token is Expired
function isTokenExpired(token) {
   try {
      const decoded = decode(token);

      if (decoded.exp < Date.now() / 1000) {
         logout()
         return true;
      } else return false;
   } catch (err) {
      return false;
   }
}
export async function createUser(username, email, password) {

   try {

      const { data } = await axios.post(`${baseURL}/api/users/register`, { username: username, email: email, password: password, list: JSON.parse(localStorage.getItem('newList')) })

      //clear the local list when user signs in
      // localStorage.setItem("newList", JSON.stringify({ listItems: [], listName: "My First List" }))
      //add user data and token to local storage
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));


      return data
   } catch (error) {
      console.error(error)
   }
}
export async function login(email, password) {

   try {
      const { data } = await axios.post(`${baseURL}/api/users/login`, { email: email, password: password, list: localStorage.getItem('newList') })

      //add user data and token to local storage
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));


      return data
   } catch (error) {
      console.error(error)
   }
}

export function logout() {
   localStorage.removeItem('token')
   localStorage.removeItem('user')
   useNavigate.navigate('/')

}

export async function getBuckets() {
   try {
      //get user buckets form api 
      const { data } = await axios.get(`${baseURL}/api/buckets`, {
         headers: {
            Authorization: `Bearer ${loggedIn ? localStorage.getItem('token') : null}`
         }
      })
      //call the reducer to update the state

      return data;
   } catch (error) {
      console.error(error)
   }
}

export async function newList(listData) {
   const { data } = await axios.post(`${baseURL}/api/lists/`, listData, {
      headers: {
         Authorization: `Bearer ${loggedIn ? localStorage.getItem('token') : null}`
      }
   });
   return data
}

export async function createNewBucket(bucketData) {
   const { data } = await axios.post(`${baseURL}/api/buckets/`, { bucketName: bucketData.bucket }, {
      headers: {
         Authorization: `Bearer ${loggedIn ? localStorage.getItem('token') : null}`
      }
   });

   return data
}

export const updateList = async (id, listData) => {
   try {
      //if not logged in we need to save to loval storage
      let { data } = await axios.put(`${baseURL}/api/lists/${id}`, listData, {
         headers: {
            Authorization: `Bearer ${loggedIn ? localStorage.getItem('token') : null}`
         }
      })

      return data
   } catch (error) {

      console.error(error)

   }
}
export const getListData = async (id) => {
   try {

      const { data } = await axios.get(`${baseURL}/api/lists/${id}`, {
         headers: {
            Authorization: `Bearer ${loggedIn ? localStorage.getItem('token') : null}`
         }
      })
      // return list

      return data
   } catch (error) {
      console.error({ error })
      return JSON.parse(localStorage.getItem('newList'))
   }
}

export const deleteList = async (id) => {
   try {
      let { data } = await axios.delete(`${baseURL}/api/lists/${id}`, {
         headers: {
            Authorization: `Bearer ${loggedIn ? localStorage.getItem('token') : null}`
         }
      })
      return data

   } catch (error) {
      localStorage.setItem("newList", JSON.stringify({ listItems: [], listName: "My First List" }));

      console.error(error)
   }
}
export const addListItem = async (listId, listItem) => {
   try {
      let { data } = await axios.post(`${baseURL}/api/lists/${listId}/items`, listItem, {
         headers: {
            Authorization: `Bearer ${loggedIn ? localStorage.getItem('token') : null}`
         }
      })
      return data
   } catch (error) {
      console.error(error)

   }
}

export const deleteListItem = async (listId, itemId) => {
   try {
      let { data } = await axios.delete(`${baseURL}/api/lists/${listId}/items/${itemId}`, {
         headers: {
            Authorization: `Bearer ${loggedIn ? localStorage.getItem('token') : null}`
         }
      })

      return data
   } catch (error) {

      console.error(error)
   }
}