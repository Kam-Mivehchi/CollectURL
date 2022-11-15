import React from 'react'
import Library from './Library.js'
import Modal from './Modal.js'
const Body = () => {
   return (
      <main className="relative  m-0 p-0">
         {/* <Sidebar /> */}
         {/* top bar to create the lists */}
         <div className="bg-blue-100 w-full flex justify-center px-8 py-5">
            {/* needs to be a dropdown list bucket or item */}


            <Modal />
         </div>
         {/* list library (row of rows) */}
         <Library />

      </ main>
   )
}

export default Body