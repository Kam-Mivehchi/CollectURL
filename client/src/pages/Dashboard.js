import { useEffect, useState } from 'react'
import BucketRow from '../components/Bucket.js'
import axios from 'axios'

import Modal from '../components/Modal.js'
import { Main, ControlBar, GridBox } from '../components/styles/Library.styles.js'

const Dashboard = () => {
   const [buckets, setBuckets] = useState([])

   const getBuckets = async () => {
      try {
         const response = await axios.get('http://localhost:3001/api/buckets/')
         console.log(response.data)
         setBuckets(response.data)
      } catch (error) {
         console.error(error)
      }
   }
   useEffect(() => {
      getBuckets()
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