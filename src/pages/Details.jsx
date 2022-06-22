import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { searchByCountry } from '../API/CountryServise'

import {IoArrowBack} from 'react-icons/io5'
import { MyButton } from '../components/UI/MyButton'
import { Info } from '../components/Info'


export const Details = () => {

  const {name} = useParams()
  const navigate = useNavigate()
  const [country, setCountry] = useState(null)
 
  useEffect(()=> {
    axios.get(searchByCountry(name)).then(
      ({data}) => setCountry(data[0])
    )
  }, [name])

  return (
    <div>
      <MyButton onClick={() => navigate(-1)}>
        <IoArrowBack />Back 
        </MyButton>
      
      {country && <Info navigate={navigate} {...country}/>}
      
      </div>
  )
}