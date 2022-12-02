import React, { useState, createContext } from 'react';

export const UserContext = createContext();

export const useAuth = () => useContext(UserContext);
const UserProvider = ({ children }) => {
   const [currentUser, setCurrentUser] = useState({
      name: 'John',
      role: 'Admin',
      id: 142323,
   });

   return (
      <UserContext.Provider value={{ currentUser: currentUser }} >
         {children}
      </UserContext.Provider>
   );
};

export default UserProvider;