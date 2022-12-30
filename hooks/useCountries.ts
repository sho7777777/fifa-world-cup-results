import { Country, Region } from '../type/countryType'

export const useCountries = () => {

  const setCountries = (region: string, countryData: Region) => {
    let cData: Country[] = [];

    switch (region) {
      case "Asia":
        cData = countryData.asia;
        break;
      case "Africa":
        cData = countryData.africa;
        break;
      case "Europe":
        cData = countryData.europe;
        break;
      case "Oceania":
        cData = countryData.oceania;
        break;
      case "South America":
        cData = countryData.southamerica;
        break;
      case "North, Central America and Caribbean":
        cData = countryData.ncac;
        break;
    }
    return cData;
  }

  return setCountries
}
