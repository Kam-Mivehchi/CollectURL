import React from 'react'
import styled, { keyframes, useTheme } from 'styled-components';
import { Button } from './styles/Utilities.styles'
const loadAnimate = keyframes`

5% {
    transform: translateX(0);
  }
  45% {
    transform: translateX(200%);
  }
  65% {
    transform: translateX(200%);
  }
  95% {
    transform: translateX(0);
  }

`
const Loader = styled.div`
   height: 1.25em;
   width:100%;
   position: absolute;
   top: 0;
   bottom: 0;
//   left:0;
//   right:0;
   margin: auto;

  div {
   animation: ${loadAnimate} ease-in-out 2.5s infinite;
   height: .5em;
   width: .5em;
   border-radius: 100%;
   background-color: black;
   position: absolute;
   border: 2px solid white;
   
   
  }
  .loader--dot:first-child {
  background-color: #8cc759;
  animation-delay: 1s;
}
.loader--dot:nth-child(2) {
  background-color: #8c6daf;
  animation-delay: 0.8s;
}
.loader--dot:nth-child(3) {
  background-color: #ef5d74;
  animation-delay: 0.6s;
}
.loader--dot:nth-child(4) {
  background-color: #f9a74b;
  animation-delay: 0.4s;
}
.loader--dot:nth-child(5) {
  background-color: #60beeb;
  animation-delay: 0.2s;
}
.loader--dot:nth-child(6) {
  background-color: #fbef5a;
  animation-delay: 0s;
}
`
const Loading = () => {
   const theme = useTheme();

   return (
      <Button wt={'100%'} bg={theme.colors.accent} color={theme.colors.accent}>
         <Loader>
            <div className="loader--dot"></div>
            <div className="loader--dot"></div>
            <div className="loader--dot"></div>
            <div className="loader--dot"></div>
            <div className="loader--dot"></div>
            <div className="loader--dot"></div>

            {/* <div class='loader--text'></div> */}
         </Loader>
         {/* Submit */}
      </Button>

   )
}

export default Loading