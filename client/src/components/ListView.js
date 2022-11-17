import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { IoAdd } from "react-icons/io5"
import { Card, UrlCard, ListContainer } from "./styles/SingleCard.styles"
import { CenteredContainer, Input, TextArea } from "./styles/Utilities.styles"
import Modal from './Modal.js'
import { Main, ControlBar, GridBox } from './styles/Library.styles.js'
import axios from 'axios'
const ListView = ({ Title }) => {
   const [listData, setListData] = useState({ listItems: [] });

   let location = useLocation();
   const [listItem, setlistItem] = useState({
      url: null,
      itemName: "untitled",
      description: "add a description",

   });

   const updateList = async (listId) => {
      try {
         let changeTitle = await axios.put(`http://localhost:3001/api/lists/${listId}`)
         console.log("make api call to update list", changeTitle)

      } catch (error) {
         console.error(error)
      }
   }
   const newListItem = async (listId) => {
      try {
         let newList = await axios.post(`http://localhost:3001/api/lists/${listId}/items`)
         console.log("make api call to create new list item", newList)
         return newList
      } catch (error) {
         console.error(error)
      }
   }
   const getListData = async () => {
      try {
         const lists = await axios.get(`http://localhost:3001/api/lists/${location.pathname.split('/')[2]}`)
         setListData(lists.data)
         // return lists
         console.log(lists.data)
      } catch (error) {
         console.error(error)
      }
   }

   useEffect(() => {
      // console.log(itemId)
      getListData()

   }, [])
   return (
      <>
         <ControlBar >
            <Modal />
         </ControlBar>
         <CenteredContainer>
            <Card >
               {/* edit list title */}
               <form onSubmit={updateList}>

                  <Input type="text" value={listData.listName} onChange={(e) => setListData({ ...listData, listName: e.target.value })} />
                  <button type="submit" ></button>
               </form>
               {/* add list item*/}
               <ListContainer>

                  {listData.listItems.map((listItem) => {
                     return (
                        <UrlCard key={listItem._id}>
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
         </CenteredContainer>
      </>
   )
}

export default ListView