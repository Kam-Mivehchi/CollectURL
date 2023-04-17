import { useState, useEffect, useRef } from 'react'
import { useLocation, redirect } from 'react-router-dom';
import { IoAdd } from "react-icons/io5"
import { Card, UrlCard, ListContainer, Anchor } from "./styles/SingleCard.styles"
import { Input, Button } from "./styles/Utilities.styles"
import { getListData, updateList, deleteList, addListItem, deleteListItem } from "../Utils/API"
import { Link } from 'react-router-dom'
import { useTheme } from 'styled-components'
import { motion } from "framer-motion"
const ListView = () => {
   const [listData, setListData] = useState({ listItems: [], listName: 'My First List' });
   const theme = useTheme()
   let location = useLocation();

   const [listItem, setlistItem] = useState({
      url: null,
      itemName: "untitled",
      description: "add a description",

   });
   const inputURL = useRef();
   const dragItem = useRef();
   const dragOverItem = useRef();


   const dragStart = (e, position) => {
      dragItem.current = position;

   };

   const dragEnter = (e, position) => {
      dragOverItem.current = position;

   };

   const drop = (e) => {
      const copyListItems = [...listData?.listItems];
      const dragItemContent = copyListItems[dragItem.current];
      copyListItems.splice(dragItem.current, 1);
      copyListItems.splice(dragOverItem.current, 0, dragItemContent);
      dragItem.current = null;
      dragOverItem.current = null;
      setListData({ ...listData, listItems: copyListItems });

   };

   const updateListTitle = async () => {
      try {
         //if not logged in we need to save to loval storage
         if (!location.pathname.split('/')[2]) throw new Error("User Not Sign In")
         await updateList(location.pathname.split('/')[2], listData)


      } catch (error) {
         localStorage.setItem("newList", JSON.stringify(listData));
         console.error(error)

      }
   }
   const removeList = async () => {
      try {
         if (!location.pathname.split('/')[2]) throw new Error("User Not Sign In")
         await deleteList(location.pathname.split('/')[2])

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
         await addListItem(location.pathname.split('/')[2], {
            url: inputURL.current.value,
            itemName: "untitled",
            description: "add a description",

         })
         renderListData()

         // return response
      } catch (error) {
         // setListData({ ...listData, listItems: [...listData.listItems, listItem] })\
         let { listItems } = listData


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
         // 
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

         // 
         const lists = await getListData(location.pathname.split('/')[2])

         setListData(lists)
         // return lists

      } catch (error) {
         !localStorage.getItem('newList')
            ?
            localStorage.setItem("newList", JSON.stringify(listData))
            :
            setListData(JSON.parse(localStorage.getItem('newList'))?.listItems)
         console.error({ error })
      }
   }

   useEffect(() => {
      // 
      renderListData()

      setListData(JSON.parse(localStorage.getItem('newList')))
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])
   return (
      <>

         {/* save button if user is not logged in */}
         <Card as={motion.div}
            animate={{ opacity: [0, 1,], x: [-100, 0] }}
            transition={{ ease: "easeOut", duration: 1 }}
            bg={theme.colors.secondary}
         >
            {/* edit list title */}
            <form onSubmit={updateListTitle}>
               <div>

                  <Input type="text" value={listData?.listName} onChange={(e) => setListData({ ...listData, listName: e.target.value })} default={"My First List"} />
                  {location.pathname.split('/')[2] = "" && (
                     <>
                        <button type="submit" className="bg-green-500 px-5">go</button>
                        <button onClick={removeList} className="bg-red-500 px-5">X</button>
                     </>
                  )}
               </div>
               {<button>
                  <Link to="/dashboard">
                     Save
                  </Link>
               </button>}
            </form>
            {/* add list item*/}
            <ListContainer>

               {listData?.listItems.map((listItem, index) => {
                  return (
                     <Anchor href={listItem.url}>

                        <UrlCard as={motion.div} key={listItem._id} draggable onDragStart={(e) => dragStart(e, index)}
                           onDragEnter={(e) => dragEnter(e, index)}
                           onDragEnd={drop}
                           animate={{ x: [-300, 0] }}
                           transition={{ ease: "easeOut", duration: 1, delay: index * .1 }}

                        >
                           {location.pathname.split('/')[2] = "" && <button onClick={() => removeListItem(listItem._id)} className="bg-red-500">X</button>}
                           <img src={listItem.img} alt="" />
                           <h3>{listItem.itemName}</h3>
                           {/* <a href={listItem.url}>Visit</a> */}
                           <p>{listItem.description}</p>
                        </UrlCard>
                     </Anchor>
                  )

               })}
            </ListContainer>
            <form onSubmit={newListItem} className="flex justify-center " >
               <div className="flex flex-wrap justify-center">

                  <Input border={"black"} type="text" value={listItem.url} onChange={(e) => setlistItem({ ...listItem, url: e.target.value })} placeholder="Enter a URL" ref={inputURL} />
                  {/* <Input border={"black"} type="text" value={listItem.itemName} onChange={(e) => setlistItem({ ...listItem, itemName: e.target.value })} placeholder="Item Title" />
                  <TextArea border={"black"} type="text" value={listItem.description} onChange={(e) => setlistItem({ ...listItem, description: e.target.value })} placeholder="Description" /> */}
                  <Button bg={theme.colors.accent} type="submit">
                     <IoAdd />
                  </Button>
               </div>
            </form>
            {/* edit list item */}
         </Card>

      </>
   )
}

export default ListView