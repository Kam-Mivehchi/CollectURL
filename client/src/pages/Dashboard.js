import { useEffect, useState } from 'react'
import BucketRow from '../components/Bucket.js'
import axios from 'axios'

import Modal from '../components/Modal.js'
import { Main, ControlBar, GridBox } from '../components/styles/Library.styles.js'
import { useUserContext } from "../Utils/UserContext"
import { UPDATE_BUCKETS, } from '../Utils/actions';
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
         dispatch({ type: UPDATE_BUCKETS, buckets: response })
      } catch (error) {
         console.error(error)
      }
   }
   useEffect(() => {
      renderBuckets()
      console.log(buckets)
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