import { useState, useEffect } from 'react'

import { Bucket, AddList, ListRow, Card } from './styles/Library.styles'



const BucketRow = ({ lists, bucket }) => {
   const [userBucket, setUserBucket] = useState(bucket || { lists: [], bucketName: "Untitled" });

   // const fetchLists = async () => {

   //    try {
   //       const response = await axios.get('http://localhost:3001/api/lists/')
   //       console.log(response.data)
   //       localStorage.setItem('Lists', JSON.stringify(response.data))
   //       setLists([])
   //    } catch (error) {

   //       console.error(error)
   //    }
   // }

   useEffect(() => {
      // fetchLists()
      console.log(userBucket, bucket)
   }, [])




   return (
      <Bucket className="" >
         <h3>{userBucket.bucketName}</h3>
         <AddList> + </AddList>
         <ListRow total={userBucket.length}>
            {/* {console.log("bucketData", bucketData.lists)} */}
            {userBucket.lists.map((el, index) => {
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
            })}

         </ListRow>
      </Bucket>
   )
}

export default BucketRow