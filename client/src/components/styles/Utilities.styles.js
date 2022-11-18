import styled from 'styled-components'

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

a{
  font-size: 0.875rem; 
line-height: 1.25rem;
font-weight:bold;
leading:relaxed;
padding:.5rem 0;
whitespace:no-wrap;
text-transform: uppercase;
pointer:cursor;
}
Link{
   pointer:cursor;
   leading:none;
   padding:.25rem .75rem;
   background-color: transparent
   color: black;
   display:block;
   outline:none;
   &:focus{
   outline:none
   }
}
@media (min-width: 768px) {
   width:50%;
   margin:auto;
   }

`
export const Button = styled.button`
background-color:${({ bg }) => bg};
color:${({ color }) => color};
padding:.75rem 1.4rem;
margin:0 10px 0 0;
  font-size: 0.875rem; 
line-height: 1.25rem;
text-transform: uppercase;
font-weight: bold;
border-radius:.25rem;
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
