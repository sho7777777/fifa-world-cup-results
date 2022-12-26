import type { NextPage } from 'next'
import { ChartPart } from '../components/ChartPart'
import { loadCountries } from '../lib/load-country'
import { createContext } from 'react'
import { Region } from '../type/countryType'

export const CountryData = createContext({})

const Home: NextPage = (props: any) => {

  const countyData = props.countryData
  // console.log("countyData", countyData)
  // console.log("countyData[asia]", countyData["asia"])

  return (
    <CountryData.Provider value={countyData}>
      <ChartPart />
    </CountryData.Provider>
  )
}

export default Home

export async function getStaticProps() {
  const countryData = await loadCountries()

  return {
    props: {
      countryData,
    },
  }
}
