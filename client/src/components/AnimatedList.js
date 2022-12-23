
import { useLocation } from 'react-router-dom';
import { IoAdd } from "react-icons/io5"
import { Card, UrlCard, ListContainer } from "./styles/SingleCard.styles"
import { Input, Button, MockInput } from "./styles/Utilities.styles"

import { Link } from 'react-router-dom'
import { useTheme } from 'styled-components'
import { motion } from "framer-motion"

const listData = {
   listItems: [{
      description: "We’ve trained a model called ChatGPT which interacts in a conversational way. The dialogue format makes it possible for ChatGPT to answer followup questions, admit its mistakes, challenge incorrect premises, and reject inappropriate requests. ChatGPT is a sibling model to InstructGPT, which is trained to follow an instruction in",
      img: "https://openai.com/content/images/size/w256h256/2020/09/icon-1.png",
      itemId: "63a513b6f85d31eb8cbc65c5",
      itemName: "ChatGPT: Optimizing Language Models for Dialogue"

   }, {
      description: "A JavaScript library for building user interfaces",
      img: "https://reactjs.org/icons/icon-512x512.png?v=f4d46f030265b4c48a05c999b8d93791",
      itemId: "63a5147ef85d31eb8cbc660f",
      itemName: "React – A JavaScript library for building user interfaces"

   }, {
      description: "Learn with Google AI. Whether you're just learning to code or you're a seasoned machine learning practitioner, you'll find information and exercises in this resource center to help you develop your skills and advance your projects.",
      img: "https://ai.google/static/images/favicon.ico",
      itemId: "63a52a50f85d31eb8cbc66e0",
      itemName: "Education – Google AI"
   }], listName: 'AI Learning'
};

const AnimatedList = () => {
   const theme = useTheme()
   let location = useLocation();

   return (
      <>

         {/* save button if user is not logged in */}
         <Card as={motion.div}
            animate={{ opacity: [0, 1] }}
            transition={{ ease: "easeOut", duration: 1 }}
            style={{ position: "" }}
            className={'w-3/4'}
         >
            {/* edit list title */}
            <form >
               <div>

                  <Input type="text" value={listData.listName} default={"My First List"} />

               </div>
               {<button>
                  <Link to="/dashboard">
                     Create Your Own
                  </Link>
               </button>}
            </form>
            {/* add list item*/}
            <ListContainer className=''>

               {listData.listItems.map((listItem, index) => {
                  return (
                     <UrlCard as={motion.div} key={listItem._id}
                        animate={index === 2 ? { x: [-500, 0, -500], opacity: [0, 1, 0] } : index === 0 ? { y: [0, 100, 0] } : { y: [0, -100, 0] }}
                        transition={{
                           ease: "easeOut",
                           duration: index === 2 ? 6 : 2,
                           delay: index === 2 ? 1.2 : 3,
                           repeat: Infinity,
                           repeatDelay: index === 2 ? 1 : 5
                        }}

                        whileTap={{ scale: 0.9 }}
                        className={"h-16 sm:h-28 md:h-28 lg:h-1/2 overflow-hidden"}
                     >
                        {location.pathname.split('/')[2] = "" && <button className="bg-red-500">X</button>}
                        <img style={{ width: '75%' }} src={listItem.img} alt="" />
                        <h3>{listItem.itemName}</h3>
                        {/* <a href={listItem.url}>Visit</a> */}
                        <p className={`overflow-y-hidden ${index !== 1 && "pt-4"} md:p-0`}>{listItem.description}</p>
                     </UrlCard>
                  )

               })}
            </ListContainer>
            <MockInput>
               <div>

                  <motion.h3
                     initial={{
                        width: 0,

                     }}
                     animate={{
                        width: "min-content"
                     }}
                     transition={{
                        duration: 1,
                        repeatDelay: 6,
                        repeat: Infinity,
                     }}

                  >
                     https://ai.google/education/
                     {/* {url.map((letter, index) => {
                     return (
                        <motion.span
                        initial={{width:0}}
                           animate={{
                              width: [0, 100 %]
                           }}
                           transition={{
                              ease: "easeOut",
                              duration: 1,
                              delay: 0,
                              repeat: Infinity,
                              repeatDelay: 10
                           }}>
                           {letter}
                           </motion.span>
                           )
                        })} */}
                  </motion.h3>
               </div>
               <Button
                  as={motion.button}
                  bg={theme.colors.accent}
                  animate={{
                     scale: [1, .9, 1]
                  }}

                  transition={{
                     duration: .2,
                     delay: 1,
                     repeatDelay: 6.8,
                     repeat: Infinity,
                  }} >
                  <IoAdd />
               </Button>
            </MockInput>

            {/* edit list item */}
         </Card>

      </>
   )
}

export default AnimatedList