import { useState, useEffect } from 'react'
import Modal from './Modal'
import { Bucket, ListRow, Card } from './styles/Library.styles'
// import { deleteList } from '../Utils/API'
// import { BiTrash } from "react-icons/bi"

const BucketRow = ({ bucket }) => {
   const [userBucket] = useState(bucket || { lists: [], bucketName: "Untitled" });








   return (
      <Bucket className="" >
         <h3>{bucket.bucketName}</h3>
         <ListRow >

            <Modal />

            {bucket.lists.length > 0 ? bucket.lists.map((el, index) => {
               return (
                  <a href={`/lists/${el._id}`}>

                     <Card key={index} id={el._id} >
                        <div>
                           <h2 className=" ">{el.listName}</h2>
                           {/* <BiTrash onClick={deleteList(el._id)} /> */}
                        </div>
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