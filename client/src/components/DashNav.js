import React from 'react'
import { useUserContext } from "../Utils/UserContext"
import { ControlBar } from '../components/styles/Library.styles.js'
import Modal from '../components/Modal.js'
const DashNav = () => {
   const [user] = useUserContext();
   return (
      <ControlBar >
         {/* TODO:add icon for username */}
         <h3>{user.username}</h3>

         <Modal />
      </ControlBar>
   )
}

export default DashNav