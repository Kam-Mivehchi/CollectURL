import React from 'react'
import styled from 'styled-components'
import AnimatedList from '../components/AnimatedList'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Hero = styled.section`

display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
article{
   text-align: center;
   display:flex;
   flex-direction:column;
   justify-content:center;
align-items:center;
   margin:1.5rem 0;
   padding:0 2rem;
   min-height:60vh;
   h1{
      font-weight: 900;
      font-size:3em;
      color:${({ theme }) => theme.colors.accent};
      filter:drop-shadow(0 .25em 1em  rgb(0,0,0,.8));
   background: -webkit-linear-gradient(45deg,${({ theme }) => theme.colors.accent}, #CB1C8D, ${({ theme }) => theme.colors.accent});
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
   line-height:150%;
   }
   p{
   margin:.5em auto  1em  auto ;
      filter:drop-shadow(0 .75em 1em  rgb(0,0,0,.3));
      color:${({ theme }) => theme.colors.dark};
      max-width:45ch;
      
   }
   button{
    font-size:120%;
    background-color:${({ theme }) => theme.colors.accent};
    background:linear-gradient(135deg,${({ theme }) => theme.colors.accent} 0%,#CB1C8D 100%);
    padding:${({ p }) => p || ".5rem 1rem"};
   color:${({ theme }) => theme.colors.primary || 'white'};
    border-radius:${({ theme }) => theme.borders.button};
margin:.5em auto
   }

}


@media (min-width: 940px) {
   // flex-direction:row;
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
            <article>

               <motion.h1
                  animate={{ y: [50, 0] }}
                  transition={{ ease: "easeOut", duration: 1 }}

               >Organize your Learning</motion.h1>
               <motion.p animate={{ opacity: [0, 1] }}
                  transition={{ ease: "easeOut", duration: 1, }}>Effortlessly organize and share your favorite websites with our dynamic list-making tool. Try it now and streamline your online experience!</motion.p>
               <motion.button
                  animate={{ opacity: [0, 1] }}
                  transition={{ ease: "easeOut", duration: 1, }}>
                  <Link to='/signup'>
                     Sign up!
                  </Link>
               </motion.button>
            </article>
            <AnimatedList />

         </Hero>
      </>
   )
}

export default Home