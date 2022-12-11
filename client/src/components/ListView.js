import { useState, useEffect } from 'react'
import { useLocation, redirect } from 'react-router-dom';
import { IoAdd } from "react-icons/io5"
import { Card, UrlCard, ListContainer } from "./styles/SingleCard.styles"
import { Input, TextArea } from "./styles/Utilities.styles"
import { getListData, updateList, deleteList, addListItem, deleteListItem, config } from "../Utils/API"
import { Link } from 'react-router-dom'
import axios from 'axios'
const ListView = ({ Title }) => {
   const [listData, setListData] = useState({ listItems: [], listName: 'My First List' });
   let location = useLocation();
   const [listItem, setlistItem] = useState({
      url: null,
      itemName: "untitled",
      description: "add a description",

   });


   const updateListTitle = async () => {
      try {
         //if not logged in we need to save to loval storage
         if (!location.pathname.split('/')[2]) throw new Error("User Not Sign In")
         let changeTitle = await updateList(location.pathname.split('/')[2], listData)
         console.log("make api call to update list", changeTitle)

      } catch (error) {
         localStorage.setItem("newList", JSON.stringify(listData));
         console.error(error)

      }
   }
   const removeList = async () => {
      try {
         if (!location.pathname.split('/')[2]) throw new Error("User Not Sign In")
         let changeTitle = await deleteList(location.pathname.split('/')[2])
         console.log("make api call to update list", changeTitle)
         return redirect("/")

      } catch (error) {
         //user must sign in cannot delete my first list


         localStorage.setItem("newList", JSON.stringify(listData));

         console.error(error)
      }
   }
   const newListItem = async (e) => {
      e.preventDefault()
      try {
         if (!location.pathname.split('/')[2]) throw new Error("User Not Sign In")
         await addListItem(location.pathname.split('/')[2], listItem)

         renderListData()

         // return response
      } catch (error) {
         // setListData({ ...listData, listItems: [...listData.listItems, listItem] })\
         let { listItems } = listData

         console.log(listItems)
         listItems.push(listItem)

         setListData({ ...listData, listItems: listItems })
         localStorage.setItem("newList", JSON.stringify(listData));
         // renderListData()

      }
   }
   const removeListItem = async (itemId) => {
      try {
         if (!location.pathname.split('/')[2]) throw new Error("User Not Sign In")

         // let newList = await axios.delete(`http://localhost:3001/api/lists/${location.pathname.split('/')[2]}/items/${itemId}`)
         await deleteListItem(location.pathname.split('/')[2], itemId)
         // console.log("make api call to create new list item", newList)
         renderListData()

      } catch (error) {

         //user must sign in

         localStorage.setItem("newList", JSON.stringify(listData));
         console.error(error)
      }
   }
   const renderListData = async () => {
      try {
         if (!location.pathname.split('/')[2]) throw new Error("User Not Sign In")

         // console.log(JSON.parse(localStorage.getItem('newList')))
         const lists = await getListData(location.pathname.split('/')[2])
         console.log(lists)
         setListData(lists)
         // return lists
      } catch (error) {
         !localStorage.getItem('newList')
            ?
            localStorage.setItem("newList", JSON.stringify(listData))
            :
            setListData(JSON.parse(localStorage.getItem('newList')).listItems)
         console.error({ error })
      }
   }

   useEffect(() => {
      // console.log(itemId)
      renderListData()

      setListData(JSON.parse(localStorage.getItem('newList')))
   }, [])
   return (
      <>

         {/* save button if user is not logged in */}
         <Card >
            {/* edit list title */}
            <form onSubmit={updateListTitle}>
               <div>

                  <Input type="text" value={listData.listName} onChange={(e) => setListData({ ...listData, listName: e.target.value })} default={"My First List"} />
                  {location.pathname.split('/')[2] = "" && (
                     <>
                        <button type="submit" className="bg-green-500 px-5">go</button>
                        <button onClick={removeList} className="bg-red-500 px-5">X</button>
                     </>
                  )}
               </div>
               <button>
                  <Link to="/dashboard">
                     Save
                  </Link>
               </button>
            </form>
            {/* add list item*/}
            <ListContainer>

               {listData.listItems.map((listItem) => {
                  return (
                     <UrlCard key={listItem._id}>
                        {location.pathname.split('/')[2] = "" && <button onClick={() => removeListItem(listItem._id)} className="bg-red-500">X</button>}
                        <h3>{listItem.itemName}</h3>
                        <a href={listItem.url}>Visit</a>
                        <img src={listItem.img} alt="" />
                        <p>{listItem.description}</p>
                     </UrlCard>
                  )

               })}
            </ListContainer>
            <form onSubmit={newListItem} className="flex justify-center ">
               <div className="flex flex-wrap justify-center">

                  <Input border={"black"} type="text" value={listItem.url} onChange={(e) => setlistItem({ ...listItem, url: e.target.value })} placeholder="Enter a URL" />
                  <Input border={"black"} type="text" value={listItem.itemName} onChange={(e) => setlistItem({ ...listItem, itemName: e.target.value })} placeholder="Item Title" />
                  <TextArea border={"black"} type="text" value={listItem.description} onChange={(e) => setlistItem({ ...listItem, description: e.target.value })} placeholder="Description" />
                  <button type="submit">
                     <IoAdd />
                  </button>
               </div>
            </form>
            {/* edit list item */}
         </Card>

      </>
   )
}

export default ListView