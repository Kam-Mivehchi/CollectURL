import { useEffect, useState } from 'react'
import BucketRow from '../components/Bucket.js'
import axios from 'axios'

import Modal from '../components/Modal.js'
import { Main, ControlBar, GridBox } from '../components/styles/Library.styles.js'
import { useUserContext } from "../Utils/UserContext"
import { ADD_BUCKET, } from '../Utils/actions';
import { getBuckets } from '../Utils/API'
const Dashboard = () => {
   const [user, dispatch] = useUserContext();
   const [buckets, setBuckets] = useState([])

   async function renderBuckets() {
      try {
         //get user buckets form api 
         const response = await getBuckets()
         //call the reducer to update the state
         setBuckets(response)

      } catch (error) {
         console.error(error)
      }
   }
   useEffect(() => {
      renderBuckets()
   }, [])


   return (
      <Main >
         <ControlBar >
            <Modal />
         </ControlBar>
         <GridBox  >

            {/* bucket/collection rows  content rows pass in the card data props*/}
            {buckets.map((bucket) => {
               return (<BucketRow lists={bucket.lists} bucket={bucket} key={bucket._id} />)
            })}
            {/* <BucketRow /> */}

         </GridBox>
      </Main>
   )
}

export default Dashboard