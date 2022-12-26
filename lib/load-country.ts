export async function loadCountries() {

  // 国データ取得
  const url = 'http://localhost:3000/api/data';
  const res = await fetch(url)
  const result = await res.json()

  const asia: string[] = []
  const africa: string[] = []
  const europe: string[] = []
  const oceania: string[] = []
  const southamerica: string[] = []
  const ncac: string[] = []

  // 国データを地域毎に分ける
  for (var i = 0; i < result.length - 1; i++) {
    switch (result[i].region) {
      case "Europe":
        europe.push(result[i])
        break;
      case "South America":
        southamerica.push(result[i])
        break;
      case "Asia":
        asia.push(result[i])
        break;
      case "Africa":
        africa.push(result[i])
        break;
      case "North, Central America and Caribbean":
        ncac.push(result[i])
        break;
      case "Oceania":
        oceania.push(result[i])
        break;
    }
  }

  const countryData: { [key: string]: string[] } = { asia: [], africa: [], europe: [], oceania: [], southamerica: [], ncac: [] }
  countryData["asia"] = asia;
  countryData["africa"] = africa;
  countryData["europe"] = europe;
  countryData["oceania"] = oceania;
  countryData["southamerica"] = southamerica;
  countryData["ncac"] = ncac;

  return countryData

}
