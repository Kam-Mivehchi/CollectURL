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

 
section{

background:${({ theme }) => theme.colors.secondary} ;
 padding:2em 0;
 width:100%;
 display:grid;
 grid-template-columns:50% 50%;
 place-items:center ;
 ol{
   
    justify-self:center;
    align-self:center;
   
    text-align:center;
   
    grid-column:span 2;
    display:flex;
    flex-direction:column;
    gap:2em;
    
    padding:1rem 1.5rem;
    text-align:center;
    color:${({ theme }) => theme.colors.accent2};
}
h2{
       color:${({ theme }) => theme.colors.primary};
   font-size:min(8vw,2.75em);
   font-weight:900;
   text-shadow:0 .25em .7em black;
}
li{
  
font-size: 1.2em;

}
}
article{
   text-align: center;
   display:flex;
// box-shadow:0 1em .4em green;
   
   flex-direction:column;
   justify-content:center;
   align-items:center;
   margin:1.5rem 0;
   padding:0 2rem;
   height:60vh;
   h1{
      font-weight: 900;
         font-size:min(12vw,4.5em);

      color:${({ theme }) => theme.colors.accent};
      filter:drop-shadow(0 .25em 1em  rgb(0,0,0,.8));
   background: -webkit-linear-gradient(165deg,${({ theme }) => theme.colors.secondary},${({ theme }) => theme.colors.accent2}, ${({ theme }) => theme.colors.secondary}, ${({ theme }) => theme.colors.accent2},${({ theme }) => theme.colors.secondary});
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
    background:linear-gradient(135deg,${({ theme }) => theme.colors.accent} 0%,${({ theme }) => theme.colors.accent2} 50%,${({ theme }) => theme.colors.accent} 100%);
    padding:${({ p }) => p || ".5rem 1rem"};
   color:${({ theme }) => theme.colors.primary || 'white'};
    border-radius:${({ theme }) => theme.borders.button};
margin:.5em auto;
   }

}
@media (min-width: 768px) {
 section ol{
    margin-left:1em;
    grid-column:span 1; 
 }  
}

@media (min-width: 940px) {
   margin:auto;
   
   article{
      margin:auto 0;
   }

   section ol{
      transform:translateX(-4em);
   }
}
@media (min-width: 1600px) {
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
            <section>

               <AnimatedList />
               <ol>
                  <h2>Simply Paste Your URL</h2>

                  <li>Say goodbye to cluttered bookmarks and hello to a streamlined, organized way of saving your favorite URLs.Just copy and paste the URLs you want to save, or type them in manually.</li>
                  {/* {<li> Whether you're browsing the web or remembering a URL from memory, our app makes it simple to build your collection of favorite links.</li>} */}
                  <li></li>

               </ol>
            </section>

         </Hero>
      </>
   )
}

export default Home