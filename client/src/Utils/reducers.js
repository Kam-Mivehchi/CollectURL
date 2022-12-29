import { useReducer } from 'react';
import { LOGIN, AUTHENTICATE, LOGOUT, UPDATE_USERNAME, UPDATE_PASSWORD, UPDATE_EMAIL, UPDATE_BUCKETS } from './actions';
// import axios from 'axios'
export const userReducer = (state, action) => {

   switch (action.type) {
      case LOGIN:
         return {
            ...state,
            ...action.payload,
         };

      case AUTHENTICATE:

         return {
            ...state,
            ...action.payload,
         };
      case LOGOUT:

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
      case UPDATE_USERNAME:
         return {
            ...state,
            username: action.username
         }
      case UPDATE_EMAIL:
         return {
            ...state,
            email: action.email
         }
      case UPDATE_PASSWORD:
         return {
            ...state,
            password: action.password
         }
      case UPDATE_BUCKETS:
         return {
            ...state,
            buckets: action.buckets
         }
      default:
         return state;
   }
};

export function useUserReducer(initialState) {
   return useReducer(userReducer, initialState);
}