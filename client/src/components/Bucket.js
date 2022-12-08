import { useState, useEffect } from 'react'
import Modal from './Modal'
import { Bucket, ListRow, Card } from './styles/Library.styles'



const BucketRow = ({ bucket }) => {
   const [userBucket, setUserBucket] = useState(bucket || { lists: [], bucketName: "Untitled" });



   useEffect(() => {
      // fetchLists()
      console.log(userBucket, bucket)
   }, [])




   return (
      <Bucket className="" >
         <h3>{bucket.bucketName}</h3>
         <ListRow >
            {/* {console.log("bucketData", bucketData.lists)} */}
            <Modal />

            {bucket.lists.length > 0 ? bucket.lists.map((el, index) => {
               return (
                  <a href={`/lists/${el._id}`}>

                     <Card key={index} id={el._id} >
                        <h2 className=" font-bold flex ">{el.listName}</h2>
                        <ol className="list-decimal p-4 ">
                           {el.listItems.map((item, index) => {

                              return <li key={index}>{item.itemName}</li>
                           })}

                        </ol>

                     </Card>
                  </a>
               )
            }) :
               <h1 className="mx-auto my-auto">No Lists in this buckets</h1>
            }

         </ListRow>
      </Bucket>
   )
}

export default BucketRow