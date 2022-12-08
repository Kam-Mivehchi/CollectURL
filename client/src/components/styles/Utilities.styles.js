import styled from 'styled-components'
import { IoHomeOutline, IoLogInOutline, IoCreateOutline } from "react-icons/io5";

export const CenteredContainer = styled.div`
background-color:${({ theme }) => theme.colors.primary || 'black'};
min-width:100%;
overflow-x:hidden;

display:grid;
place-items:center;

// border-radius:${({ theme }) => theme.borders.outer};
min-height:${({ height }) => height || '90vh'};
max-height:100vh;

`
export const Container = styled.div`
background-color:${({ theme }) => theme.colors.primary || 'white'};
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
span{
   
   color:${({ theme }) => theme.colors.accent2};
}
@media (min-width: 768px) {
   width:66%;
   margin:auto;
   }

`
export const Button = styled.button`
background-color:${({ bg }) => bg};
color:${({ color }) => color};

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
color:${({ theme }) => theme.colors.secondary};
   
   margin-right:.25rem;
  margin-bottom:.4em;
`
export const LoginIcon = styled(IoLogInOutline)`
   margin:0;
   padding:0;
   display:inline-block;
   font-size:120%;
color:${({ theme }) => theme.colors.secondary};
   
   margin-right:.25rem;
  margin-bottom:.4em;
`
export const SignUpIcon = styled(IoCreateOutline)`
   margin:0;
   padding:0;
   display:inline-block;
   font-size:120%;
color:${({ theme }) => theme.colors.secondary};
   
   margin-right:.25rem;
  margin-bottom:.4em;
`

export const AuthenticationForm = styled.form`
background-color: ${({ theme }) => theme.colors.secondary};
padding:1rem 2rem;
border-radius:${({ theme }) => theme.borders.outer};
border:2px solid ${({ theme }) => theme.colors.accent};
overflow-x:hidden;
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
`
