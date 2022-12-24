import styled, { keyframes } from 'styled-components'
import { IoHomeOutline, IoLogInOutline, IoCreateOutline } from "react-icons/io5";
export const Background = styled.div`

 background: linear-gradient(260deg, rgba(151,114,251,0.3) 0%, rgba(237,237,237,1) 100%);
 `
export const CenteredContainer = styled.div`
// background-color:${({ theme }) => theme.colors.primary || 'black'};
min-width:100%;

overflow-x:hidden;

display:grid;
place-items:center;

// border-radius:${({ theme }) => theme.borders.outer};
min-height:${({ height }) => height || '90vh'};
max-height:100vh-2rem;

`
export const Container = styled.div`
// box-shadow:0 .25em 8em   rgba(0,0,0,.1);
// background-color:${({ theme }) => theme.colors.primary || 'black'};

max-width:100vw;
overflow-x:hidden;
`
export const Input = styled.input`
background-color:${({ bg }) => bg || 'white'};
border:2px solid ${({ border }) => border || 'transparent'};
border-radius:${({ theme }) => theme.borders.input};
max-width:100%;
&:focus{
   outline:2px solid blue;
}

`
const blink = keyframes`
from, to { border-color: transparent }
  50% { border-color: black; }
  `
export const MockInput = styled.div`
width:100%;
display:flex;
justify-content:center;
position:absolute;
bottom:.1rem;
div{
   border-radius:${({ theme }) => theme.borders.input};
   background-color:${({ bg }) => bg || 'white'};
   overflow:hidden;
   margin:auto 0;
   border:2px solid black;
   height:2rem;
   width:50%;
   padding:.25em 0;
   
}
h3{
   overflow:hidden;
   border-right:2px solid black;
   animation:${blink}.75s step-end infinite;
}
&:focus{
   outline:2px solid blue;
}
`

export const TextArea = styled.textarea`
background-color:${({ bg }) => bg || 'white'};
border:2px solid ${({ border }) => border || 'transparent'};
border-radius:${({ theme }) => theme.borders.input};

&:focus{
   outline:2px solid blue;
}

`
export const Nav = styled.nav`
position:relative;
display:flex;
flex-wrap: wrap;
justify-content:space-between;
align-items:center;
items-center;
padding:1rem .5rem;
margin:0 1rem;
// filter:drop-shadow(0 0em 1em  rgb(0,0,0,.8));
img{
   width:6em;
}
a{
   font-size: 1.25rem; 
   line-height: 1.25rem;
   font-weight:bold;
   leading:relaxed;
   padding:.5rem 0;
   whitespace:no-wrap;
   text-transform: uppercase;
   pointer:cursor;
   margin:0;
   
   filter:drop-shadow(0 .25em 1em  rgb(0,0,0,.6));
}
Link{
   pointer:cursor;
   leading:none;
   padding:.25rem .75rem;
   background-color: transparent
   color: black;
   display:flex;
   outline:none;
   
   
   color:${({ theme }) => theme.colors.black};
   &:focus{
      outline:none
   }
}
span{
   
   color:${({ theme }) => theme.colors.black};
}
@media (min-width: 768px) {
   width:66%;
   margin:auto;
}

`
export const Button = styled.button`
background:${({ bg }) => bg};
color:${({ color }) => color};

box-shadow:0 0em 1em  rgb(0,0,0,.6);
margin:0 10px 0 0;
font-size: 0.875rem; 
line-height: 1.25rem;
text-transform: uppercase;
font-weight: bold;
padding:${({ ht }) => ht || ".75rem 1.4rem"};
width:${({ wt }) => wt};
border-radius:${({ theme }) => theme.borders.button || ".25rem"};

 outline:none;
 &:hover{
   filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
  
 }
 &:active{
   background-color:${({ theme }) => theme.colors.activeButton || "black"}
 }
   &:focus{
   outline:none
   }
`
export const HomeIcon = styled(IoHomeOutline)`
   margin:0;
   padding:0;
   display:inline-block;
   font-size:120%;
color:${({ theme }) => theme.colors.black};
   margin-right:.25rem;
  margin-bottom:.4em;
`
export const LoginIcon = styled(IoLogInOutline)`
   margin:0;
   padding:0;
   display:inline-block;
   font-size:120%;
color:${({ theme }) => theme.colors.black};
   
   margin-right:.25rem;
  margin-bottom:.4em;
`
export const SignUpIcon = styled(IoCreateOutline)`
   margin:0;
   padding:0;
   display:inline-block;
   font-size:120%;
color:${({ theme }) => theme.colors.black};
   
   margin-right:.25rem;
  margin-bottom:.4em;
`

export const AuthenticationForm = styled.form`
background-color: ${({ theme }) => theme.colors.secondary};
padding:1rem 2rem;
border-radius:${({ theme }) => theme.borders.outer};
border:2px solid ${({ theme }) => theme.colors.accent};
overflow-x:hidden;
box-shadow:0 3em 4em  rgb(0,0,0,.4);

h2{
   font-weight:bold;
   margin:0 0 1rem 0;
   text-align:center;
   font-size:150%;
   font-weight:900;
}
label{
font-size: .875rem; 
font-weight:600;
margin:0;
}
small{
   font-size: .5rem;
   color:${({ theme }) => theme.colors.accent}
}
input{
   padding:.5rem;
position:relative;
border-radius:${({ theme }) => theme.borders.input};
font-size: 0.875rem; 
line-height: 1rem;
box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
outline:none;
width:80%;
display:block;
margin:.3rem auto 1rem auto;
width:100%;
&:focus{
   outline:none;
}
}
button{
   display:block;
   margin:auto;
}
p a{
   color:${({ theme }) => theme.colors.accent};
   font-weight:bold;
}
`
