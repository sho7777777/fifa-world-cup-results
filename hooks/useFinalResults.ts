import { yearY } from "../const/label";
import { Country, Region, Total } from '../type/countryType'

export const useFinalResults = () => {
  const dataArr: number[] = [];
  const finalMatches: string[] = [];

  // const createResultArray = (i: number, countryData:any) => {
  const createResultArray = (i: number, cData: any) => {
    yearY.forEach((value: string) => {
      dataArr.push(parseInt(cData[i].total[value].result))
      const finalMatch: string = cData[i].total[value].opponent + " " + cData[i].total[value].score;
      finalMatches.push(finalMatch);
    })
    const countryName: string = cData[i].country + " " + cData[i].flag
    return { dataArr, finalMatches, countryName }
  }

  return createResultArray
}
