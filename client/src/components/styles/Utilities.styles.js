import styled, { keyframes } from 'styled-components'
import { IoHomeOutline, IoLogInOutline, IoCreateOutline } from "react-icons/io5";
export const Background = styled.div`
min-height:100vh;
 background: linear-gradient(260deg, rgba(151,114,251,0.3) 0%, rgba(237,237,237,1) 100%);
 background-size:cover;
background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='3840' height='2160' preserveAspectRatio='none' viewBox='0 0 3840 2160'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1706%26quot%3b)' fill='none'%3e%3crect width='3840' height='2160' x='0' y='0' fill='rgba(37%2c 37%2c 37%2c 1)'%3e%3c/rect%3e%3cpath d='M1097.4733361462531-5.486977907658122L548.8756060302782-34.23776666275343 1068.7225473911578 543.1107522083169z' fill='rgba(151%2c 114%2c 251%2c 0.69)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1852.0650865765851 1802.2225125563496L1588.3846959176353 1529.1734748768672 1315.335658238153 1792.853865535817 1579.0160488971028 2065.9029032152994z' fill='rgba(151%2c 114%2c 251%2c 0.69)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M2101.940159950319 1919.582554742099L2220.7898604819807 1593.0456862224144 1894.252991962296 1474.1959856907527 1775.4032914306342 1800.7328542104374z' fill='rgba(151%2c 114%2c 251%2c 0.69)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M2410.228656707275 1040.6761877804051L2103.623219580583 1307.2042280169856 2370.1512598171635 1613.8096651436779 2676.756696943856 1347.2816249070975z' fill='rgba(151%2c 114%2c 251%2c 0.69)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M2978.682121321577 196.61770109069636L3012.2410459686166 580.1979650307849 3362.2623852616657 163.05877644365677z' fill='rgba(151%2c 114%2c 251%2c 0.69)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1927.82 2148.5 a638.53 638.53 0 1 0 1277.06 0 a638.53 638.53 0 1 0 -1277.06 0z' fill='rgba(151%2c 114%2c 251%2c 0.69)' class='triangle-float1'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1706'%3e%3crect width='3840' height='2160' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e");
// color:white;
 `
export const CenteredContainer = styled.div`

min-width:100%;



display:grid;
place-items:center;
margin:2rem auto;
// border-radius:${({ theme }) => theme.borders.outer};
min-height:${({ height }) => height || 'auto'};


`
export const Container = styled.div`
// box-shadow:0 .25em 8em   rgba(0,0,0,.1);
// background-color:${({ theme }) => theme.colors.primary || 'black'};

max-width:100vw;
// overflow-x:hidden;
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
color:${({ theme }) => theme.colors.light};

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
