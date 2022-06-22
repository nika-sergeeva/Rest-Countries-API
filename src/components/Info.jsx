import axios from "axios"
import styled from "styled-components"
import { filterByCode } from "../API/CountryServise"
import { useNavigate } from 'react-router-dom'

import { nanoid } from "nanoid"
import { useState, useEffect } from "react"

const Wrapper = styled.section`
    width: 100%;
    display: grid;
    grid-template-columns: minmax(400px, 600px) 1fr;
    align-items: center;
    gap: 5rem;

    @media (max-width: 1198px){
        grid-template-columns: 100%;
        gap: 2rem;
        margin-top: 3rem;
    }

    @media (max-width: 849px){
        grid-template-columns: minmax(100px, 400px) 1fr;
        align-items: center;
        gap: 5rem;
        width: 100%;
    }

 
`
const InfoImage = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
`
const InfoTitle = styled.h1`
    margin: 0;
    font-weight: ${props => props.theme.fwNormal};
    transition: all .5s ease;
`
const ListGroup = styled.div`
    display: flex;
    flex-direction: column;

    gap: 2rem;

    @media (min-width: 1024px){
        flex-direction: row;
        gap: 4rem;
    }
`
const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`
const ListItem = styled.li`
    line-height: 1.8;
    
    & > b{
        font-weight: ${props => props.theme.fwBold};
        transition: all .5s ease;
    }
`
const Meta = styled.div`
    margin-top: 3rem;
    display: flex;
    gap: 1.5rem;
    flex-direction: column;
    align-items: flex-start;

    & > b{
        font-weight: ${props => props.theme.fwBold};
        transition: all .5s ease;    
    }

    @media (min-width: 1198px){
        flex-direction: row;
        align-items: center;
    }
`
const TagGroup = styled.div`
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
`
const Tag = styled.span`
    padding: 0 1rem;
    background-color: ${props => props.theme.colorsUiBase};
    box-shadow: ${props => props.theme.shadow};
    line-height: 1.5;
    cursor: pointer;
    transition: all .5s ease;
`

export const Info = (props) => {

const [neighbors, setNeighbors] = useState([])

const navigate = useNavigate()


useEffect(()=> {
    if(props.borders.length)
 axios.get(filterByCode(props.borders)).then(
    ({data}) => setNeighbors(data.map(i => i.name.common))
 )
}, [props.borders])


function currencysKeys(){
let keys = Object.entries(props.currencies) 
return keys
}
function valuesLang(){
let lang = Object.values(props.languages)
return lang 
}
function nativeN(){
let names = Object.values(props.name.nativeName)
return names
}

const curName = currencysKeys()
const langs = valuesLang()
const nativeNames = nativeN()

  return (
    <Wrapper>
        <InfoImage src={props.flags.svg} alt={props.name.common}/>

        <div>
            <InfoTitle>{props.name.common}</InfoTitle>
            <ListGroup>
                <List>
                    <ListItem>
                        <b>Native Name:</b> {nativeNames[0].official} 
                    </ListItem>
                    <ListItem>
                       <b>Population:</b> {props.population}
                    </ListItem>
                    <ListItem>
                       <b>Region:</b> {props.region}
                    </ListItem>
                    <ListItem>
                       <b>Sub Region:</b> {props.subregion}
                    </ListItem>
                    <ListItem>
                       <b>Capital:</b> {props.capital}
                    </ListItem>
                </List>
                <List>
                    <ListItem>
                         <b>Top Level Domain:</b> {props.tld.map((d) => {
                          return   <span key={nanoid()}>{d} </span>
                         })}
                     </ListItem>
                     <ListItem> 
                         <b>Currency:</b> {' '}
                         {curName[0].map((c) => <span key={nanoid()}>{c.name}</span>) }
                     </ListItem>
                     <ListItem>
                         <b>Languages:</b>{' '}
                        {langs.map((l) => {
                         return  <span key={nanoid()}> {l} </span>
                        })}
                     </ListItem>
                </List>
            </ListGroup>
            <Meta>
                        <b>Border Countries: </b>
                        {!neighbors.length?
                        <span>There is no border countries</span>
                        : <TagGroup>
                {neighbors.map(i => <Tag onClick={()=> navigate(`/country/${i}`)} key={nanoid()}>{i} </Tag>)}
                        </TagGroup>
                    }
            </Meta>
        </div>
    </Wrapper>
  )
}
