import { useState } from 'react'
import { nanoid } from 'nanoid'

import { List } from '../components/List'
import { Card } from '../components/Card'
import { Controls } from '../components/Controls';


export const Home = (props) => {

  const [filtered, setFiltered] = useState(props.countries)

  const handleFilters = (search, region) => {
    let data = [...props.countries]
    if(region){
      data = data.filter(i => i.region.includes(region))
    }
    if(search){
      data = data.filter( i => i.name.common.toLowerCase().includes(search.toLowerCase()) )
    }
 
   return setFiltered(data)
  }

  return (
    <>
   <Controls handleFilters={handleFilters}  />
      <List>
       {filtered.map((item) => {
            const countryInfo = {
              img: item.flags.svg,
              name: item.name.common,
              info: [
                {
                  title: 'Population',
                  description: item.population.toLocaleString()
                },
                {
                  title: 'Region',
                  description: item.region
                },
                {
                  title: 'Capital',
                  description: item.capital
                }
              ],
            }
            return <Card key={nanoid()} name={item.name.common} {...countryInfo} />
          })
        } 
      </List>
    </>
  )
}