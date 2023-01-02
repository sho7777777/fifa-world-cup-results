import type { NextPage } from "next";
import { ChartPart } from "../components/ChartPart";
import { loadCountries } from "../lib/load-country";
import { createContext } from "react";
import { Region } from "../type/countryType";

type Props = {
  countryList: Region;
};

export const CountryData = createContext<Region>({
  asia: [],
  africa: [],
  europe: [],
  oceania: [],
  southamerica: [],
  ncac: [],
});

const Home: NextPage<Props> = ({ countryList }) => {
  return (
    <CountryData.Provider value={countryList}>
      <ChartPart />
    </CountryData.Provider>
  );
};

export default Home;

export async function getStaticProps() {
  const countryList: Region = await loadCountries();

  return {
    props: {
      countryList,
    },
  };
}
