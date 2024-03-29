import styled from 'styled-components'


export const Card = styled.div`
grid-column:span 2;
background-color:${({ theme }) => theme.colors.cardBackground || 'white'};
color:${({ theme }) => theme.colors.cardText || 'black'};
padding:1.5em;
// margin:3em auto;
max-width:90%;

margin:auto;
position:relative;
border-radius:${({ theme }) => theme.borders.inner};
box-shadow:0 0 1em  rgb(0,0,0,.5);
form:first-child{
  display:flex;
  justify-content:space-between;
  align-items:center;
  Input{
    font-weight:bold;
    font-size:clamp(1em,2em,2vw);
    width:100%;
    text-overflow: ellipsis;
    
  }
  >button{
    color:white;
    background-color:${({ theme }) => theme.colors.accent || 'white'};
     background:linear-gradient(135deg,${({ theme }) => theme.colors.accent} 0%,${({ theme }) => theme.colors.accent2} 50%,${({ theme }) => theme.colors.accent} 100%);
    border-radius:${({ theme }) => theme.borders.button};
    padding:${({ p }) => p || ".3rem .75rem"};
    height:fit-content;
  }
}
Input{
  width:50%;
}
@media (min-width: 768px) {
  max-width:25rem; 
grid-column:span 1;
  
  
}
`
export const Anchor = styled.a`


`


export const UrlCard = styled.div`
display:grid;
grid-template-columns:20% 75%;
column-gap:.5em;
grid-template-rows:repeat(2,1fr);
max-height:5em;
border:2px solid ${({ theme }) => theme.colors.dark} ;
border-radius:${({ theme }) => theme.borders.button};
padding:.5em;
align-items:center;
  overflow-y:hidden;
background-color:${({ theme }) => theme.colors.primary};
margin:.75em 0;
box-shadow:0 .5em .25em  rgb(0,0,0,.2);
transition:transform .2s ease-in-out;
transition:box-shadow .2s ease-in-out;
&:hover{
 
  box-shadow: inset 0 0 1em rgb(0,0,0,.3);
}

&:active{
  
  transform: scale(.9);

}
img{

  grid-area:span 2/span 1;

height:auto;

 width:min(100%,5em);
 filter: drop-shadow(0px 50px 20px rgb(100,100,100,.3));
  border-radius:${({ theme }) => theme.borders.inner};
  justify-self:left;
  overflow:hidden;
}
h3{
  font-weight:bold;
    grid-column:2;
  font-size:.9em;
white-space: nowrap;
text-overflow: ellipsis;
text-transform: capitalize;
overflow:hidden;
margin:0;
}
p{

  font-style:italic;
  font-size:.7em;
 overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  line-height:1em;
  &:hover{
 overflow: auto;
 
  
  }
}

`
export const ListContainer = styled.div`
min-height:283px;
max-height:70vh;
overflow-y:scroll;
padding:1em;

`
