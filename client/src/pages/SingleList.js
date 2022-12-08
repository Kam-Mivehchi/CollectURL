import { useState, useEffect } from 'react'
import { useLocation, redirect } from 'react-router-dom';
import { IoAdd } from "react-icons/io5"
import { Card, UrlCard, ListContainer } from "../components/styles/SingleCard.styles"
import { CenteredContainer, Input, TextArea } from "../components/styles/Utilities.styles"
import ListView from '../components/ListView.js'
import DashNav from '../components/DashNav.js'
import { Main, ControlBar, GridBox } from '../components/styles/Library.styles.js'
import axios from 'axios'
const SingleList = ({ Title }) => {

   return (
      <>


         <CenteredContainer>
            <DashNav />

            {/* todo import this as a component  */}
            <ListView />
         </CenteredContainer>
      </>
   )
}

export default SingleList