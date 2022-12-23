import React from 'react'
import styled from 'styled-components'
import AnimatedList from '../components/AnimatedList'
import { motion } from 'framer-motion'
const Hero = styled.section`

display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
min-height:100vh;
article{
   
   text-align: center;
   margin:1.5rem 0;
   padding:0 2rem;
   span{
      font-weight: bold;
   }
   p{
   margin:.75rem 0 0 0;
   }
   button{
    font-size:120%;
    background-color:${({ theme }) => theme.colors.accent2 || 'white'};
    padding:${({ p }) => p || ".3rem .75rem"};
    border-radius:${({ theme }) => theme.borders.button};

   }

}


@media (min-width: 940px) {
   flex-direction:row;
   article{
      margin:auto 0;
      
   }
 
   width:80vw;
  margin:auto;
}
@media (min-width: 1600px) {
 
   width:60vw;
  margin:auto;
}
`

const Home = () => {
   return (
      <>

         <Hero>
            <AnimatedList />
            <article>

               <motion.h1
                  animate={{ y: [50, 0] }}
                  transition={{ ease: "easeOut", duration: 1 }}

               >Collect<span>URL</span></motion.h1>
               <motion.p animate={{ opacity: [0, 1] }}
                  transition={{ ease: "easeOut", duration: 1, }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate necessitatibus nihil quam aliquam voluptatibus enim?</motion.p>
               <motion.button
                  animate={{ opacity: [0, 1] }}
                  transition={{ ease: "easeOut", duration: 1, }}>Sign up!</motion.button>
            </article>
            {/* <CenteredContainer height="60vh">
            </CenteredContainer> */}
         </Hero>
      </>
   )
}

export default Home