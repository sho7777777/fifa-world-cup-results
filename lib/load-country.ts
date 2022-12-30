import { url } from "../const/label";
import { Region } from "../type/countryType";

export async function loadCountries() {
  // 国データ取得
  const cData = await (await fetch(url)).json();
  const cLength: number = cData.length - 1

  const countryList: Region = {
    asia: [],
    africa: [],
    europe: [],
    oceania: [],
    southamerica: [],
    ncac: [],
  };

  // 国データを地域毎に分ける
  for (var i = 0; i < cLength; i++) {
    switch (cData[i].region) {
      case "Asia":
        countryList["asia"].push(cData[i]);
        break;
      case "Africa":
        countryList["africa"].push(cData[i]);
        break;
      case "Europe":
        countryList["europe"].push(cData[i]);
        break;
      case "South America":
        countryList["southamerica"].push(cData[i]);
        break;
      case "North, Central America and Caribbean":
        countryList["ncac"].push(cData[i]);
        break;
      case "Oceania":
        countryList["oceania"].push(cData[i]);
        break;
    }
  }
  return countryList;
}
