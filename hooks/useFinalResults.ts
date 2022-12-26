import { yearY } from "../const/label";

export const useFinalResults = () => {
  const dataArr1: number[] = [];
  const finalMatches1: string[] = [];

  const createResultArray = (i: number, countryData: any) => {
    yearY.forEach((value) => {
      dataArr1.push(parseInt(countryData[i].total[value].result))
      const finalMatch: string = countryData[i].total[value].opponent + " " + countryData[i].total[value].score;
      finalMatches1.push(finalMatch);
    })
    const countryName = countryData[i].country + " " + countryData[i].flag
    return { dataArr1, finalMatches1, countryName }
  }

  return createResultArray
}
