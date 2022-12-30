import type { NextPage } from 'next'
import { ChartPart } from '../components/ChartPart'
import { loadCountries } from '../lib/load-country'
import { createContext } from 'react'
import { Region, Country } from '../type/countryType'


// export const CountryData = createContext({})
export const CountryData = createContext<Region>({ asia: [], africa: [], europe: [], oceania: [], southamerica: [], ncac: [] })
const Home: NextPage = (props: any) => {

  const countyData: Region = props.countryData

  return (
    <CountryData.Provider value={countyData}>
      <ChartPart />
    </CountryData.Provider>
  )
}

export default Home

export async function getStaticProps() {
  const countryData: object = await loadCountries()

  return {
    props: {
      countryData,
    },
  }
}
