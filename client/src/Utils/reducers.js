import { useReducer } from 'react';
import { LOGIN, REGISTER, LOGOUT } from './actions';
import axios from 'axios'
export const userReducer = async (state, action) => {
   try {

      switch (action.type) {
         case LOGIN:
            console.log("login attempt")
            const { data } = await axios.post('http://localhost:3001/api/users/login', action.payload)


            console.log(data);
            return {
               ...state,
               token: data.token,
            };


         case REGISTER:
            console.log('lOGIN dispatched');
            const res = fetch('/api/users/register')
            console.log({ res });
            return {
               ...state,
               isLoggedIn: !action.isLoggedIn,
            };
         case LOGOUT:
            console.log('LOGOUT dispatched');
            //REMOVE TOKEN AND USER DATA FROM STATE
            return {
               ...state,
               username: "",
               _id: "",
               lists: [],
               buckets: [],
               email: "",
               token: ""
            };
         default:
            return state;
      }
   } catch (error) {
      console.error(error)
   }
};

export function useUserReducer(initialState) {
   return useReducer(userReducer, initialState);
}