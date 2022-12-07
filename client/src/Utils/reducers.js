import { useReducer } from 'react';
import { LOGIN, REGISTER, LOGOUT } from './actions';
import axios from 'axios'
export const userReducer = async (state, action) => {

   switch (action.type) {
      case LOGIN:
         return {
            ...state,
            ...action.payload,
         };


      case REGISTER:
         return {
            ...state,
            ...action.payload,
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
};

export function useUserReducer(initialState) {
   return useReducer(userReducer, initialState);
}