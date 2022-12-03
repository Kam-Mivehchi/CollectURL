import { useReducer } from 'react';
import { UPDATE_ACCOUNT_STATUS, UPDATE_ACCOUNT_NAME } from './actions';

export const userReducer = (state, action) => {
   switch (action.type) {
      case LOGIN:
         console.log('lOGIN dispatched');
         return {
            ...state,
            isLoggedIn: !action.isLoggedIn,
         };
      case LOGOUT:
         console.log('LOGOUT dispatched');
         return {
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