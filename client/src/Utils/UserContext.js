import React, { useState, createContext, useContext } from 'react';
import { useUserReducer } from './reducers';

const UserContext = createContext();

//provider that facilites the users state
const UserProvider = ({ children }) => {
   // const [currentUser, setCurrentUser] = useState();

   const [user, dispatch] = useUserReducer({
      username: JSON.parse(localStorage.getItem('user'))?.username || "",
      email: JSON.parse(localStorage.getItem('user'))?.email || "",
      password: JSON.parse(localStorage.getItem('user'))?.password || "",
      _id: JSON.parse(localStorage.getItem('user'))?._id || "",
      lists: JSON.parse(localStorage.getItem('user'))?.lists || [],
      buckets: JSON.parse(localStorage.getItem('user'))?.buckets || [],
      token: ""
   })

   return (
      <UserContext.Provider value={[user, dispatch]} >
         {children}
      </UserContext.Provider>
   );
};

//custum hook to access user state and dispatch
const useUserContext = () => useContext(UserContext);

export { UserProvider, useUserContext };