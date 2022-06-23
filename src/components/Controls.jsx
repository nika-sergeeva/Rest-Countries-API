import styled from 'styled-components'
import { useState, useEffect } from 'react'


import { MySearch } from './UI/MySearch'
import { MySelect } from './UI/MySelect'

 
const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

  @media(max-width: 767px){
    flex-direction: column;
    align-items: flex-start;
  }
`

export const Controls = (props) => {

  const options = [
    {value: 'Africa', label: 'Africa'},
    {value: 'America', label: 'America'},
    {value: 'Asia', label: 'Asia'},
    {value: 'Europe', label: 'Europe'},
    {value: 'Oceania', label: 'Oceania'},
  ]    
  
  const [searchQuery, setSearchQuery] = useState('')
  const [region, setRegion] = useState('')

  useEffect(()=>{
  const theRegion = region? region.value : ''
  props.handleFilters(searchQuery, theRegion)
  }, [searchQuery, region])

  return (
    <Wrapper>
      
        <MySearch 
        setSearchQuery={setSearchQuery}
        searchQuery={searchQuery}
        placeholder="Search..." />

        <MySelect 
        options={options}  
        isClearable 
        isSearchable={false}
        value={region}
        onChange={setRegion}
        />
    </Wrapper>
  )
}
