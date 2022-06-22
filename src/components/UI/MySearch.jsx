import styled from "styled-components"

import { IoSearch } from 'react-icons/io5'

const InputContainer = styled.label`
    background-color: ${props => props.theme.colorsUiBase};
    padding: 1rem 2rem;
    display: flex;
    align-items:center;
    transition: all .5s ease;

    border-radius: ${props => props.theme.radii};
    box-shadow: ${props => props.theme.shadow};
    width: 300px;
    margin-bottom: 1rem;
    
    @media(max-width: 375px){
      width: 100%;
      padding: 1rem 1rem;
    }
`

const Input = styled.input.attrs({
    type: 'search',
    placeholder: 'Search for a country..',
})`
    margin-left: 2rem;
    border: none;
    outline: none;
    color: ${props => props.theme.color};
    transition: all .5s ease;
    background-color: transparent;

    & textarea{
      background-color: transparent;
    }
`

export const MySearch = (props) => {
  return (
    <InputContainer>
      <IoSearch /> <Input onChange={(e) => props.setSearchQuery(e.target.value)} value={props.searchQuery} />
    </InputContainer>
  )
}
