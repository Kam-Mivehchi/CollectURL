import styled from 'styled-components'


export const Main = styled.main`
padding:0;
margin:0;
position:relative;
color:${({ theme }) => theme.colors.textPrimary};
background-color:${({ theme }) => theme.colors.primary};
min-height:90vh;
`
export const ControlBar = styled.div`
width:90%;
margin:auto;
   
background-color:${({ theme }) => theme.colors.primary};

position:relative;
display:flex;
justify-content:space-between;
justify-content:space-between;
align-items:center;
padding: 1.25rem 0rem;
color:${({ theme }) => theme.colors.accent};
grid-column:span 2;
h3{
  font-weight:bold;
   filter:drop-shadow(0 .25em 1em  rgb(0,0,0,.6));
font-size:clamp(1em,2vw,3em);
text-transform:capitalize;
}
@media (min-width: 768px) {
   width:66%;
   margin:auto;
  justify-content:space-between;
grid-column:span 1;

   }
`
export const GridBox = styled.div`
display:grid;
grid-template-columns:repeat(12,1fr);
color:${({ theme }) => theme.colors.textPrimary};
background-color:${({ theme }) => theme.colors.primary};
row-gap:2em;
margin:auto;
overflow:hidden;

align-items:start;
align-content: space-between;
padding: 1em 1em 2em 1em;
`
export const Bucket = styled.section`
display:grid;

grid-template-columns:repeat(12,1fr);
place-items:center start;

align-items:center;
row-gap:.5em;
grid-column: span 12;
color:${({ theme }) => theme.colors.textPrimary};
background-color:${({ theme }) => theme.colors.secondary};
border-radius: ${({ theme }) => theme.borders.outer};
box-shadow:0 1em 1em  rgb(0,0,0,.2);
padding:1em;

h3{
  grid-column: span 5;
  
  margin-bottom:0;
  color:${({ theme }) => theme.colors.black};

  font-weight:bold;
  font-size:125%;

}

@media (min-width: 768px) {
   width:66%;
   margin: 0 auto;
   }
`

export const ListRow = styled.section`
grid-column: span 12;
display:flex;
align-items:center;
// margin:.5em;
gap:.5em;
flex-wrap:nowrap;
width:100%;
color:${({ theme }) => theme.colors.textPrimary};
background-color:inherit;
padding-right:1rem;
padding-bottom:.5rem;
// margin-right:1rem;
overflow-x:auto;
padding: 0  0 .75em  .75em;
border-radius: ${({ theme }) => theme.borders.inner};

min-height:25vh
`

export const Card = styled.article`
background-color:${({ theme }) => theme.colors.cardBackground};
padding:1em .5em;
border-radius:.5em;
min-width:33vw;
height:25vh;
color:${({ theme }) => theme.colors.cardText};
transition:transform .2s ease-in-out;
transition:box-shadow .2s ease-in-out;
&:hover{
 
  box-shadow: inset 0 0 1em   rgb(0,0,0,.3);
}
&:active{
  transform: scale(.9);
}
position:relative;
overflow:hidden;
h2{
 font-weight:bold;
font-size:.75em;
}
ol{
  max-height:60%;
  
  width:100%;
   overflow-y:scroll;
   overflow-x:hidden;
   position:absolute;
   font-size:.5em;
 padding:.25em;
}

li{ 
 white-space: nowrap;
  overflow: hidden; 
  text-overflow: ellipsis;
  
  // max-width: 200px;
}

@media (min-width: 768px) {
min-width:20vw; 
  }
`
