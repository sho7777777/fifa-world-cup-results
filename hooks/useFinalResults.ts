import { yearY } from "../const/label";

export const useFinalResults = () => {
  const resultsArr: number[] = [];
  const finalMatchresults: string[] = [];

  // const createResultArray = (i: number, countryData:any) => {
  const createResultArray = (i: number, cData: any) => {
    yearY.forEach((value: string) => {
      resultsArr.push(parseInt(cData[i].total[value].result))
      const finalMatch: string = cData[i].total[value].opponent + " " + cData[i].total[value].score;
      finalMatchresults.push(finalMatch);
    })
    const countryName: string = cData[i].country + " " + cData[i].flag
    return { resultsArr, finalMatchresults, countryName }
  }

  return createResultArray
}
