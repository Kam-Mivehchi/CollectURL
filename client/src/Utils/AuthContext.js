import React, { useState, createContext, useContext } from 'react';
import { useUserReducer } from './reducers';

export const UserContext = createContext();

export const useAuth = () => useContext(UserContext);

const UserProvider = ({ children }) => {
   // const [currentUser, setCurrentUser] = useState();
   const [user, dispatch] = useUserReducer({
      username: "",
      _id: "",
      lists: [],
      buckets: [],
      email: "",
      token: ""
   })

   return (
      <UserContext.Provider value={{ currentUser: currentUser }} >
         {children}
      </UserContext.Provider>
   );
};

export default UserProvider;