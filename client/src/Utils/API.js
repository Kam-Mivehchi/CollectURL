import axios from 'axios'
import { useNavigate } from "react-router-dom"
import { useLocation, redirect } from 'react-router-dom';

export const config = {
   headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
   }
}
export async function createUser(username, email, password) {

   try {
      const { data } = await axios.post('http://localhost:3001/api/users/register', { username: username, email: email, password: password })

      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));


      return data
   } catch (error) {
      console.error(error)
   }
}
export async function login(email, password) {

   try {
      const { data } = await axios.post('http://localhost:3001/api/users/login', { email: email, password: password })
      console.log(data)
      localStorage.setItem('token', data.token);


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
      const { data } = await axios.get('http://localhost:3001/api/buckets', config)
      //call the reducer to update the state
      console.log()
      return data;
   } catch (error) {
      console.error(error)
   }
}

export async function newList(listData) {
   const { data } = await axios.post('http://localhost:3001/api/lists/', listData, config);
   return data
}

export async function createNewBucket(bucketData) {
   const { data } = await axios.post('http://localhost:3001/api/buckets/', { bucketName: bucketData.bucket }, config);

   return data
}

export const updateList = async (id, listData) => {
   try {
      //if not logged in we need to save to loval storage
      let { data } = await axios.put(`http://localhost:3001/api/lists/${id}`, listData, config)

      return data
   } catch (error) {

      console.error(error)

   }
}
export const getListData = async (id) => {
   try {

      const { data } = await axios.get(`http://localhost:3001/api/lists/${id}`, config)
      // return list

      return data
   } catch (error) {
      console.error({ error })
      return JSON.parse(localStorage.getItem('newList'))
   }
}

export const deleteList = async (id) => {
   try {
      let { data } = await axios.delete(`http://localhost:3001/api/lists/${id}`, config)
      return data

   } catch (error) {
      localStorage.setItem("newList", JSON.stringify({ listItems: [], listName: "My First List" }));

      console.error(error)
   }
}
export const addListItem = async (listId, listItem) => {
   try {
      let { data } = await axios.post(`http://localhost:3001/api/lists/${listId}/items`, listItem, config)
      return data
   } catch (error) {
      console.error(error)

   }
}

export const deleteListItem = async (listId, itemId) => {
   try {
      let { data } = await axios.delete(`http://localhost:3001/api/lists/${listId}/items/${itemId}`, config)

      return data
   } catch (error) {

      console.error(error)
   }
}