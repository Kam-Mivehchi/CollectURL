import React from 'react'
import styled from 'styled-components'
import ListView from '../components/ListView'
import { CenteredContainer, Input, TextArea } from "../components/styles/Utilities.styles"

const Hero = styled.section`

display:flex;
flex-direction:column;
justify-content:center;
article{
   
   text-align: center;
   margin:1.5rem 0;
   padding:0 2rem;
   span{
      font-weight: bold;
   }
   p{
   margin:1.5rem 0;
   }
   button{
    font-size:120%;
    background-color:${({ theme }) => theme.colors.accent2 || 'white'};
    padding:${({ p }) => p || ".3rem .75rem"};
    border-radius:${({ theme }) => theme.borders.button};

   }

}

@media (min-width: 768px) {
 
  flex-direction:row;
  article{
   margin:auto 0;

  }
}
@media (min-width: 940px) {
 
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

               <h1>Collect<span>URL</span></h1>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate necessitatibus nihil quam aliquam voluptatibus enim?</p>
               <button>Sign up!</button>
            </article>
            <ListView />
            {/* <CenteredContainer height="60vh">
            </CenteredContainer> */}
         </Hero>
      </>
   )
}

export default Home