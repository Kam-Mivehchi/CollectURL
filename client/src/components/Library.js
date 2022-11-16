import { useEffect, useState } from 'react'
import BucketRow from './Bucket.js'
import axios from 'axios'

import Modal from './Modal.js'
import { Main, ControlBar, GridBox } from './styles/Library.styles.js'
import ListView from './ListView.js'
const Library = () => {
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
            {buckets.map((bucket, i) => {
               return (<BucketRow lists={bucket.lists} bucket={bucket} />)
            })}
            {/* <BucketRow /> */}

         </GridBox>
      </Main>
   )
}

export default Library