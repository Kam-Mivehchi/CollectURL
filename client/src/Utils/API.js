import axios from 'axios'
import { useNavigate } from "react-router-dom"
// import { useLocation, redirect } from 'react-router-dom';
// import { useUserContext } from "../Utils/UserContext"

export async function createUser(username, email, password) {

   try {

      const { data } = await axios.post('http://localhost:3001/api/users/register', { username: username, email: email, password: password, list: JSON.parse(localStorage.getItem('newList')) })

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
      const { data } = await axios.post('http://localhost:3001/api/users/login', { email: email, password: password, list: localStorage.getItem('newList') })
      console.log(data)

      //clear the local list when user signs in
      localStorage.setItem("newList", JSON.stringify({ listItems: [], listName: "My First List" }))
      //add user data and token to local storage
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));


      return data
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
      const { data } = await axios.get('http://localhost:3001/api/buckets', {
         headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
         }
      })
      //call the reducer to update the state

      return data;
   } catch (error) {
      console.error(error)
   }
}

export async function newList(listData) {
   const { data } = await axios.post('http://localhost:3001/api/lists/', listData, {
      headers: {
         Authorization: `Bearer ${localStorage.getItem('token')}`
      }
   });
   return data
}

export async function createNewBucket(bucketData) {
   const { data } = await axios.post('http://localhost:3001/api/buckets/', { bucketName: bucketData.bucket }, {
      headers: {
         Authorization: `Bearer ${localStorage.getItem('token')}`
      }
   });

   return data
}

export const updateList = async (id, listData) => {
   try {
      //if not logged in we need to save to loval storage
      let { data } = await axios.put(`http://localhost:3001/api/lists/${id}`, listData, {
         headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
         }
      })

      return data
   } catch (error) {

      console.error(error)

   }
}
export const getListData = async (id) => {
   try {

      const { data } = await axios.get(`http://localhost:3001/api/lists/${id}`, {
         headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
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
      let { data } = await axios.delete(`http://localhost:3001/api/lists/${id}`, {
         headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
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
      let { data } = await axios.post(`http://localhost:3001/api/lists/${listId}/items`, listItem, {
         headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
         }
      })
      return data
   } catch (error) {
      console.error(error)

   }
}

export const deleteListItem = async (listId, itemId) => {
   try {
      let { data } = await axios.delete(`http://localhost:3001/api/lists/${listId}/items/${itemId}`, {
         headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
         }
      })

      return data
   } catch (error) {

      console.error(error)
   }
}