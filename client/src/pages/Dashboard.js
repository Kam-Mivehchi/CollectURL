import { useEffect, useState } from 'react'
import BucketRow from '../components/Bucket.js'
import DashNav from '../components/DashNav.js'


import { Main, GridBox } from '../components/styles/Library.styles.js'
import { useUserContext } from "../Utils/UserContext"
import { UPDATE_BUCKETS, } from '../Utils/actions';
import { getBuckets } from '../Utils/API'
const Dashboard = () => {
   const [dispatch] = useUserContext();
   const [buckets, setBuckets] = useState([])


   useEffect(() => {
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
      renderBuckets()

      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])


   return (
      <Main >

         <DashNav />
         <GridBox  >

            {/* bucket/collection rows  content rows pass in the card data props*/}
            {buckets?.map((bucket, i) => {
               return (<BucketRow lists={bucket.lists} bucket={bucket} key={bucket._id} index={i} />)
            })}
            {/* <BucketRow /> */}

         </GridBox>
      </Main>
   )
}

export default Dashboard