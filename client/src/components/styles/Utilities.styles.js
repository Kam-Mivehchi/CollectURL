import styled from 'styled-components'
import { IoHomeOutline } from "react-icons/io5";

export const CenteredContainer = styled.div`
background-color:${({ theme }) => theme.colors.secondary || 'black'};
min-width:100vw;
display:grid;
place-items:center;
// border-radius:${({ theme }) => theme.borders.outer};
min-height:100vh;
`
export const Container = styled.div`
background-color:${({ theme }) => theme.colors.primary || 'white'};
min-width:100vw;

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
padding:.75rem .5rem;
margin:0 1rem;
color:${({ theme }) => theme.colors.accent2};
a{
  font-size: 0.875rem; 
line-height: 1.25rem;
font-weight:bold;
leading:relaxed;
padding:.5rem 0;
whitespace:no-wrap;
text-transform: uppercase;
pointer:cursor;
margin:0;
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
background-color:${({ bg }) => bg};
color:${({ color }) => color};
// padding:.75rem 1.4rem;
margin:0 10px 0 0;
font-size: 0.875rem; 
line-height: 1.25rem;
text-transform: uppercase;
font-weight: bold;
padding:${({ ht }) => ht || ".75rem 1.4rem"};
border-radius:${({ theme }) => theme.borders.button || ".25rem"};
 outline:none;
 &:hover{
   filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
   transform:scale(1.1);
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
   
   margin-right:.25rem;
  margin-bottom:.4em;
`
