import styled from 'styled-components'


export const Card = styled.div`
background-color:${({ theme }) => theme.colors.CenteredContainer || 'white'};
padding:1.5em;
margin:1.5em;
min-width:90%;
min-height:90%;
position:relative;
border-radius:${({ theme }) => theme.borders.inner};
@media (min-width: 768px) {
min-width:50vw; 
  }
`


export const UrlCard = styled.div`

p{

}
`
export const ListContainer = styled.div`

max-height:70vh;
overflow-x:scroll;
`
