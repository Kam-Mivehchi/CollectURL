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
overflow-x:auto;
grid-column: span 12;
color:${({ theme }) => theme.colors.bucketText};
background-color:${({ theme }) => theme.colors.bucketBackground};
h3{
   grid-column: span 4;
   
}

`

export const ListRow = styled.section`
grid-column: span 12;

margin:.5em;
gap:.5em;
display:flex;
flex-wrap:overflow;

width:100%;
color:${({ theme }) => theme.colors.listRowText};
background-color:${({ theme }) => theme.colors.listRowBackground};
`
export const AddList = styled.button`
grid-column: 5/span 1;
background-color:lightblue;
width:1.25em;
height:1.25em;
border-radius:50%;
color:${({ theme }) => theme.colors.newListButtonText};
background-color:${({ theme }) => theme.colors.newListButtonBackground};

`
export const Card = styled.article`
background-color:white;
padding:1.5em;
border-radius:1em;
min-width:min(45%,20rem);

color:${({ theme }) => theme.colors.cardText};
background-color:${({ theme }) => theme.colors.cardBackground};
`