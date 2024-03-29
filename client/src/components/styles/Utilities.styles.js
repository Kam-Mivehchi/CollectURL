import styled, { keyframes } from 'styled-components'
import { IoHomeOutline, IoLogInOutline, IoCreateOutline } from "react-icons/io5";
export const Background = styled.div`
background:${({ theme }) => theme.colors.primary};

`
export const AuthContainer = styled.div`
background:${({ theme }) => theme.colors.primary};
min-width:100%;
display:grid;
place-items:start center;

// min-height:${({ height }) => height || 'auto'};
min-height:90vh;
`
export const CenteredContainer = styled.div`

padding:0;
margin:0;
position:relative;
color:${({ theme }) => theme.colors.textPrimary};
background-color:${({ theme }) => theme.colors.primary};
min-height:90vh;
// display:grid;

`
export const Container = styled.div`
// box-shadow:0 .25em 8em   rgba(0,0,0,.1);
// background-color:${({ theme }) => theme.colors.primary || 'black'};

max-width:100vw;
// overflow-x:hidden;
`
export const Input = styled.input`
background-color:${({ bg }) => bg || 'transparent'};
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
align-items:center;
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
color:${({ theme }) => theme.colors.secondary};

position:relative;
display:flex;
flex-wrap: wrap;
justify-content:space-between;
align-items:center;
items-center;
padding:1rem .5rem;
margin:0 1rem;
img{
   width:5em;
   filter:drop-shadow(0 0 .5em  rgb(0,0,0,.1));
   padding:.5em;
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
   &:hover{
      opacity:.75;
   }
   &:active{
      opacity:1;
      transform:scale(.95);
   }
}
Link{
   pointer:cursor;
   leading:none;
   padding:.25rem .75rem;
   background-color: transparent
   color: black;
   display:flex;
   outline:none;
   &:focus{
      outline:none
   }
}

@media (min-width: 768px) {
   width:66%;
   margin:auto;
}

`
export const Button = styled.button`
background:${({ bg }) => bg};
background:${({ gradient }) => gradient};
color:${({ color }) => color};

box-shadow:0 0em 1em  rgb(0,0,0,.6);
margin:0 10px 0 0;
font-size: 0.875rem; 
// line-height: 1.25rem;
text-transform: uppercase;
font-weight: bold;
padding:${({ pad }) => pad || ".75rem 1.4rem"};
width:${({ wt }) => wt};
height:${({ ht }) => ht};

border-radius:${({ theme, border }) => border || theme.borders.button || ".25rem"};



display:${({ flex }) => flex ? "flex" : ""};
align-items:center;
justify-content:center;

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
background-color: ${({ theme }) => theme.colors.accent2};
padding:1rem 2rem;
border-radius:${({ theme }) => theme.borders.outer};
border:2px solid ${({ theme }) => theme.colors.accent};
overflow-x:hidden;
box-shadow:0 3em 4em  rgb(0,0,0,.4);
div{
   text-align:center;
   margin:.5em auto;
}
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
   font-size: .75rem;
   color:red;
   font-weight:bold;
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
margin:.3rem auto 0rem auto;
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
