import styled from 'styled-components'


export const Main = styled.main`
padding:0;
margin:0;
position:relative;
color:${({ theme }) => theme.colors.mainText};
background-color:${({ theme }) => theme.colors.mainBackground};

`
export const ControlBar = styled.div`
width:100%;
display:flex;
justify-content:center;
padding: 1.25rem 2rem;
color:${({ theme }) => theme.colors.controlBarText};
background-color:${({ theme }) => theme.colors.controlBarBackground};
`
export const GridBox = styled.div`
display:grid;
grid-template-columns:repeat(12,1fr);
color:${({ theme }) => theme.colors.bucketText};
background-color:${({ theme }) => theme.colors.bucketBackground};
row-gap:1em;
// padding:0 1em;
overflow-x:hidden;
`
export const Bucket = styled.section`
display:grid;
width:100vw;
grid-template-columns:repeat(12,1fr);
place-items:center start;
padding:.5em 0;
row-gap:.5em;
overflow-x:hidden;
grid-column: span 12;
color:${({ theme }) => theme.colors.bucketText};
background-color:${({ theme }) => theme.colors.bucketBackground};
h3{
  grid-column: span 5;
  margin: 0 1rem;
}

`

export const ListRow = styled.section`
grid-column: span 12;
display:flex;

margin:.5em;
gap:.5em;
flex-wrap:nowrap;
width:100%;
color:${({ theme }) => theme.colors.listRowText};
background-color:${({ theme }) => theme.colors.listRowBackground};
overflow-x:scroll;
padding-right:1rem;
margin-right:1rem;
`
export const AddList = styled.button`
grid-column: span 1;
background-color:lightblue;
width:1.25em;
height:1.25em;
border-radius:50%;
color:${({ theme }) => theme.colors.newListButtonText};
background-color:${({ theme }) => theme.colors.newListButtonBackground};

`
export const Card = styled.article`
background-color:white;
padding:1em .5em;
border-radius:.5em;
min-width:33vw;
height:25vh;
color:${({ theme }) => theme.colors.cardText};
background-color:${({ theme }) => theme.colors.cardBackground};
position:relative;
overflow:hidden;
h2{
 
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