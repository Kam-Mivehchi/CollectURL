import styled from 'styled-components'


export const Card = styled.div`
background-color:${({ theme }) => theme.colors.cardBackground || 'white'};
padding:1.5em;
margin:1.5em;
// min-width:90%;
min-height:60vh;
position:relative;
border-radius:${({ theme }) => theme.borders.inner};
form:first-child{
  display:flex;
  justify-content:space-between;
  div{
    max-width:50%;
  }
  >button{
    color:white;
    background-color:${({ theme }) => theme.colors.accent || 'white'};
    border-radius:${({ theme }) => theme.borders.button};
    padding:${({ p }) => p || ".3rem .75rem"};
    height:fit-content;
    
  }
}
@media (min-width: 768px) {
  max-width:50vw; 
  
}
`


export const UrlCard = styled.div`

p{
  
}
`
export const ListContainer = styled.div`

max-height:70vh;

overflow-x:auto;
`
