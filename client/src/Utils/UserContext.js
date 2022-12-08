import React, { useState, createContext, useContext } from 'react';
import { useUserReducer } from './reducers';

const UserContext = createContext();

//provider that facilites the users state
const UserProvider = ({ children }) => {
   // const [currentUser, setCurrentUser] = useState();
   const [user, dispatch] = useUserReducer({
      username: "",
      email: "",
      password: "",
      _id: "",
      lists: [],
      buckets: [],
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