import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const Wrapper = styled.article`
  border-radius: 0.3rem;
  background-color: ${props => props.theme.colorsUiBase};
  box-shadow: ${props => props.theme.shadow};
  cursor: pointer;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`

const CardImage = styled.img`
  display:flex;
  width: 100%;
  height: 50%;
  object-fit: cover;
  object-position: center;
  box-shadow: ${props => props.theme.shadow};
`

const CardBody = styled.div`
  height: 50%;
  padding: 1rem 1.5rem 2rem;
  background-color: ${props => props.theme.colorsUiBase};
`

const CardTitle = styled.h3`
  margin: 0;
  font-size: ${props => props.theme.fsMd};
  font-weight: ${props => props.theme.fwBold};
`

const CardList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 1rem 0 0;
`

const CardListItem = styled.li`
  font-size: ${props => props.theme.fsSm};
  line-height: 1.5;
  font-weight: ${props => props.theme.fwLight};

  & > b{
    font-weight: ${props => props.theme.fwBold};
  }
`

export const Card = (props) => {

  let navigate = useNavigate()

  return (
    <Wrapper onClick={() => navigate(`/country/${props.name}`)}>
        <CardImage src={props.img} alt={props.name}  />
        <CardBody>
            <CardTitle>{props.name}</CardTitle>
            <CardList>
                {props.info.map((item) => {
         return <CardListItem key={item.title}>
            <b>{item.title}:</b> {item.description}
                    </CardListItem>
                })}
            </CardList>
        </CardBody>
    </Wrapper>
  )
}