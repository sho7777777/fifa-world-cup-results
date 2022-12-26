import type { NextPage } from 'next'
import Head from 'next/head'
import { CountryProvider } from '../hooks/CountryProvider'

import { label } from '../const/label'
import { year, yearY, regions } from '../const/label'
import { loadCountries } from '../lib/load-country'
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from 'chart.js';
import { useState, createContext } from 'react'

import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionIcon,
  AccordionPanel,
  Box,
  Button,
  Center,
  Container,
  Flex,
  Grid,
  GridItem,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import { AccordionPart } from '../components/AccordionPart'

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
)

// export const CountryDataX = (result: any) => {
//   const asianCountries = result.countryData["asia"]
//   return asianCountries;
// }

// export const CountryContext = createContext({})


const Home: NextPage = (result: any) => {

  // console.log("asia3", asia3)
  // console.log(result.countryData)
  // console.log(result.countryData[0])
  // console.log(result.countryData[0][0].country)
  // console.log(result.countryData[0][0].region)

  // const asia = result.countryData["asia"]
  // const africa = result.countryData["africa"]
  // const europe = result.countryData["europe"]
  // const oceania = result.countryData["oceania"]
  // const southamerica = result.countryData["southamerica"]
  // const ncac = result.countryData["ncac"]

  const [data1, setData1] = useState<number[]>([])
  const [data2, setData2] = useState<number[]>([])
  const [data3, setData3] = useState<number[]>([])
  const [data4, setData4] = useState<number[]>([])
  const [country1, setCountry1] = useState<string>("")
  const [country2, setCountry2] = useState<string>("")
  const [country3, setCountry3] = useState<string>("")
  const [country4, setCountry4] = useState<string>("")
  const [finalMatch, setFinalMatch] = useState<string[]>([])

  const [asia, setAsiaData] = useState<any>(result.countryData["asia"])
  const [africa, setAfricaData] = useState<any>(result.countryData["africa"])
  const [europe, setEuropeData] = useState<any>(result.countryData["europe"])
  const [oceania, setOceaniaData] = useState<any>(result.countryData["oceania"])
  const [southamerica, setSouthAmericaData] = useState<any>(result.countryData["southamerica"])
  const [ncac, setNcacData] = useState<any>(result.countryData["ncac"])

  const [region, setRegion] = useState<string>('');

  const [showCountry1Accordion, setShowCountry1Accordion] = useState(true)
  const [showCountry2Accordion, setShowCountry2Accordion] = useState(false)
  const [showCountry3Accordion, setShowCountry3Accordion] = useState(false)
  const [showCountry4Accordion, setShowCountry4Accordion] = useState(false)

  const showCountry1 = () => {
    setShowCountry1Accordion(true)
    setShowCountry2Accordion(false)
    setShowCountry3Accordion(false)
    setShowCountry4Accordion(false)
  }

  const showCountry2 = () => {
    setShowCountry1Accordion(false)
    setShowCountry2Accordion(true)
    setShowCountry3Accordion(false)
    setShowCountry4Accordion(false)
  }

  const showCountry3 = () => {
    setShowCountry1Accordion(false)
    setShowCountry2Accordion(false)
    setShowCountry3Accordion(true)
    setShowCountry4Accordion(false)
  }

  const showCountry4 = () => {
    setShowCountry1Accordion(false)
    setShowCountry2Accordion(false)
    setShowCountry3Accordion(false)
    setShowCountry4Accordion(true)
  }

  ///////////////////////////////// country1 /////////////////////////////////
  const dataArr1: number[] = [];
  const finalMatches1: string[] = [];

  const setAsia = (e: any) => {

    const i: number = parseInt(e.target.value);
    yearY.forEach((value) => {
      dataArr1.push(parseInt(asia[i].total[value].result))
      const finalMatch: string = asia[i].total[value].opponent + " " + asia[i].total[value].score;
      finalMatches1.push(finalMatch);
    })
    setFinalMatch(finalMatches1)
    setCountry1(asia[i].country + " " + asia[i].flag)
    setData1(dataArr1)
  }

  const setAfrica = (e: any) => {
    const i: number = parseInt(e.target.value);

    yearY.forEach((value) => {
      dataArr1.push(parseInt(africa[i].total[value].result))
      const finalMatch: string = africa[i].total[value].opponent + " " + africa[i].total[value].score;
      finalMatches1.push(finalMatch);
    })

    setFinalMatch(finalMatches1)
    setCountry1(africa[i].country + " " + africa[i].flag)
    setData1(dataArr1)
  }

  const setEurope = (e: any) => {
    const i: number = parseInt(e.target.value);

    setCountry1(europe[i].country + " " + europe[i].flag)
    yearY.forEach((value) => {
      dataArr1.push(parseInt(europe[i].total[value].result))
      const finalMatch: string = europe[i].total[value].opponent + " " + europe[i].total[value].score;
      finalMatches1.push(finalMatch);
    })

    setFinalMatch(finalMatches1)
    setData1(dataArr1)
  }

  const setOceania = (e: any) => {
    const i: number = parseInt(e.target.value);

    yearY.forEach((value) => {
      dataArr1.push(parseInt(oceania[i].total[value].result))
      const finalMatch: string = oceania[i].total[value].opponent + " " + oceania[i].total[value].score;
      finalMatches1.push(finalMatch);
    })

    setFinalMatch(finalMatches1)
    setCountry1(oceania[i].country + " " + oceania[i].flag)
    setData1(dataArr1)
  }

  const setSouthAmerica = (e: any) => {
    const i: number = parseInt(e.target.value);

    yearY.forEach((value) => {
      dataArr1.push(parseInt(southamerica[i].total[value].result))
      const finalMatch: string = southamerica[i].total[value].opponent + " " + southamerica[i].total[value].score;
      finalMatches1.push(finalMatch);
    })

    setFinalMatch(finalMatches1)
    setCountry1(southamerica[i].country + " " + southamerica[i].flag)
    setData1(dataArr1)
  }

  const setNcac = (e: any) => {
    const i: number = parseInt(e.target.value);

    yearY.forEach((value) => {
      dataArr1.push(parseInt(ncac[i].total[value].result))
      const finalMatch: string = ncac[i].total[value].opponent + " " + ncac[i].total[value].score;
      finalMatches1.push(finalMatch);
    })

    setFinalMatch(finalMatches1)
    setCountry1(ncac[i].country + " " + ncac[i].flag)
    setData1(dataArr1)
  }

  ///////////////////////////////// country2 /////////////////////////////////
  const dataArr2: number[] = [];
  const finalMatches2: string[] = [];

  const setAsia2 = (e: any) => {
    const i: number = parseInt(e.target.value);

    yearY.forEach((value) => {
      dataArr2.push(parseInt(asia[i].total[value].result))
      const finalMatch: string = asia[i].total[value].opponent + " " + asia[i].total[value].score;
      finalMatches2.push(finalMatch);
    })

    setFinalMatch(finalMatches1)
    setCountry2(asia[i].country + " " + asia[i].flag)
    setData2(dataArr2)
  }

  const setAfrica2 = (e: any) => {
    const i: number = parseInt(e.target.value);

    yearY.forEach((value) => {
      dataArr2.push(parseInt(africa[i].total[value].result))
      const finalMatch: string = africa[i].total[value].opponent + " " + africa[i].total[value].score;
      finalMatches2.push(finalMatch);
    })

    setFinalMatch(finalMatches1)
    setCountry2(africa[i].country + " " + africa[i].flag)
    setData2(dataArr2)
  }

  const setEurope2 = (e: any) => {
    const i: number = parseInt(e.target.value);

    yearY.forEach((value) => {
      dataArr2.push(parseInt(europe[i].total[value].result))
      const finalMatch: string = europe[i].total[value].opponent + " " + europe[i].total[value].score;
      finalMatches2.push(finalMatch);
    })

    setFinalMatch(finalMatches1)
    setCountry2(europe[i].country + " " + europe[i].flag)
    setData2(dataArr2)
  }

  const setOceania2 = (e: any) => {
    const i: number = parseInt(e.target.value);

    yearY.forEach((value) => {
      dataArr2.push(parseInt(oceania[i].total[value].result))
      const finalMatch: string = oceania[i].total[value].opponent + " " + oceania[i].total[value].score;
      finalMatches2.push(finalMatch);
    })

    setFinalMatch(finalMatches1)
    setCountry2(oceania[i].country + " " + oceania[i].flag)
    setData2(dataArr2)
  }

  const setSouthAmerica2 = (e: any) => {
    const i: number = parseInt(e.target.value);

    yearY.forEach((value) => {
      dataArr2.push(parseInt(southamerica[i].total[value].result))
      const finalMatch: string = southamerica[i].total[value].opponent + " " + southamerica[i].total[value].score;
      finalMatches2.push(finalMatch);
    })

    setFinalMatch(finalMatches1)
    setCountry2(southamerica[i].country + " " + southamerica[i].flag)
    setData2(dataArr2)
  }

  const setNcac2 = (e: any) => {
    const i: number = parseInt(e.target.value);

    yearY.forEach((value) => {
      dataArr2.push(parseInt(ncac[i].total[value].result))
      const finalMatch: string = ncac[i].total[value].opponent + " " + ncac[i].total[value].score;
      finalMatches2.push(finalMatch);
    })

    setFinalMatch(finalMatches1)
    setCountry2(ncac[i].country + " " + ncac[i].flag)
    setData2(dataArr2)
  }

  ///////////////////////////////// country3 /////////////////////////////////
  const dataArr3: number[] = [];
  const finalMatches3: string[] = [];

  const setAsia3 = (e: any) => {
    const i: number = parseInt(e.target.value);

    yearY.forEach((value) => {
      dataArr3.push(parseInt(asia[i].total[value].result))
      const finalMatch: string = asia[i].total[value].opponent + " " + asia[i].total[value].score;
      finalMatches3.push(finalMatch);
    })

    setFinalMatch(finalMatches3)
    setCountry3(asia[i].country + " " + asia[i].flag)
    setData3(dataArr3)
  }

  const setAfrica3 = (e: any) => {
    const i: number = parseInt(e.target.value);

    yearY.forEach((value) => {
      dataArr3.push(parseInt(africa[i].total[value].result))
      const finalMatch: string = africa[i].total[value].opponent + " " + africa[i].total[value].score;
      finalMatches3.push(finalMatch);
    })

    setFinalMatch(finalMatches3)
    setCountry3(africa[i].country + " " + africa[i].flag)
    setData3(dataArr3)
  }

  const setEurope3 = (e: any) => {
    const i: number = parseInt(e.target.value);

    yearY.forEach((value) => {
      dataArr3.push(parseInt(europe[i].total[value].result))
      const finalMatch: string = europe[i].total[value].opponent + " " + europe[i].total[value].score;
      finalMatches3.push(finalMatch);
    })

    setFinalMatch(finalMatches3)
    setCountry3(europe[i].country + " " + europe[i].flag)
    setData3(dataArr3)
  }

  const setOceania3 = (e: any) => {
    const i: number = parseInt(e.target.value);

    yearY.forEach((value) => {
      dataArr3.push(parseInt(oceania[i].total[value].result))
      const finalMatch: string = oceania[i].total[value].opponent + " " + oceania[i].total[value].score;
      finalMatches3.push(finalMatch);
    })

    setFinalMatch(finalMatches3)
    setCountry3(oceania[i].country + " " + oceania[i].flag)
    setData3(dataArr3)
  }

  const setSouthAmerica3 = (e: any) => {
    const i: number = parseInt(e.target.value);

    yearY.forEach((value) => {
      dataArr3.push(parseInt(southamerica[i].total[value].result))
      const finalMatch: string = southamerica[i].total[value].opponent + " " + southamerica[i].total[value].score;
      finalMatches3.push(finalMatch);
    })

    setFinalMatch(finalMatches3)
    setCountry3(southamerica[i].country + " " + southamerica[i].flag)
    setData3(dataArr3)
  }

  const setNcac3 = (e: any) => {
    const i: number = parseInt(e.target.value);

    yearY.forEach((value) => {
      dataArr3.push(parseInt(ncac[i].total[value].result))
      const finalMatch: string = ncac[i].total[value].opponent + " " + ncac[i].total[value].score;
      finalMatches3.push(finalMatch);
    })

    setFinalMatch(finalMatches3)
    setCountry3(ncac[i].country + " " + ncac[i].flag)
    setData3(dataArr3)
  }

  ///////////////////////////////// country4 /////////////////////////////////
  const dataArr4: number[] = [];
  const finalMatches4: string[] = [];

  const setAsia4 = (e: any) => {
    const i: number = parseInt(e.target.value);

    yearY.forEach((value) => {
      dataArr4.push(parseInt(asia[i].total[value].result))
      const finalMatch: string = asia[i].total[value].opponent + " " + asia[i].total[value].score;
      finalMatches4.push(finalMatch);
    })

    setFinalMatch(finalMatches4)
    setCountry4(asia[i].country + " " + asia[i].flag)
    setData4(dataArr4)
  }

  const setAfrica4 = (e: any) => {
    const i: number = parseInt(e.target.value);

    yearY.forEach((value) => {
      dataArr4.push(parseInt(africa[i].total[value].result))
      const finalMatch: string = africa[i].total[value].opponent + " " + africa[i].total[value].score;
      finalMatches4.push(finalMatch);
    })

    setFinalMatch(finalMatches4)
    setCountry4(africa[i].country + " " + africa[i].flag)
    setData4(dataArr4)
  }

  const setEurope4 = (e: any) => {
    const i: number = parseInt(e.target.value);

    yearY.forEach((value) => {
      dataArr4.push(parseInt(europe[i].total[value].result))
      const finalMatch: string = europe[i].total[value].opponent + " " + europe[i].total[value].score;
      finalMatches4.push(finalMatch);
    })

    setFinalMatch(finalMatches4)
    setCountry4(europe[i].country + " " + europe[i].flag)
    setData4(dataArr4)
  }

  const setOceania4 = (e: any) => {
    const i: number = parseInt(e.target.value);

    yearY.forEach((value) => {
      dataArr4.push(parseInt(oceania[i].total[value].result))
      const finalMatch: string = oceania[i].total[value].opponent + " " + oceania[i].total[value].score;
      finalMatches4.push(finalMatch);
    })

    setFinalMatch(finalMatches4)
    setCountry4(oceania[i].country + " " + oceania[i].flag)
    setData4(dataArr4)
  }

  const setSouthAmerica4 = (e: any) => {
    const i: number = parseInt(e.target.value);

    yearY.forEach((value) => {
      dataArr4.push(parseInt(southamerica[i].total[value].result))
      const finalMatch: string = southamerica[i].total[value].opponent + " " + southamerica[i].total[value].score;
      finalMatches4.push(finalMatch);
    })

    setFinalMatch(finalMatches4)
    setCountry4(southamerica[i].country + " " + southamerica[i].flag)
    setData4(dataArr4)
  }

  const setNcac4 = (e: any) => {
    const i: number = parseInt(e.target.value);

    yearY.forEach((value) => {
      dataArr4.push(parseInt(ncac[i].total[value].result))
      const finalMatch: string = ncac[i].total[value].opponent + " " + ncac[i].total[value].score;
      finalMatches4.push(finalMatch);
    })

    setFinalMatch(finalMatches4)
    setCountry4(ncac[i].country + " " + ncac[i].flag)
    setData4(dataArr4)
  }

  const labels = label;
  const data: ChartData<'line'> = {
    labels: labels,
    datasets: [
      {
        data: data1,
        label: country1,
        backgroundColor: '#ffffff',
        borderColor: '#da70d6',
      },
      {
        data: data2,
        label: country2,
        backgroundColor: '#ffffff',
        borderColor: '#7fffd4'
      },
      {
        data: data3,
        label: country3,
        backgroundColor: '#ffffff',
        borderColor: '#ff7f50'
      },
      {
        data: data4,
        label: country4,
        backgroundColor: '#ffffff',
        borderColor: '#a9a9a9'
      },
    ]
  };
  const options: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        display: true,

        // title: {
        //   display: true,
        //   text: country
        // }
      },
      title: {
        display: false,
        // text: '🇯🇵 Japan',
        // text: country,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            switch (context.parsed.y) {
              case 1:
                return '1';
              case 2:
                return '2';
              case 3:
                return '3';
              case 4:
                return '4';
              case 5:
                return 'Quarter Finals';
              case 6:
                return 'Round of 16';
              case 7:
                return 'Group Stage';
              case 8:
                return 'Not Participating';
            }
          },
          footer: function (tooltipItems) {
            let finalMatchResult;
            tooltipItems.forEach(function (tooltipItem) {
              finalMatchResult = finalMatch[tooltipItem.dataIndex]
            })
            return finalMatchResult
          }
        }
      },

    },
    scales: {
      x:
      {
        grid: {
          display: false
        },
        ticks: {
          font: {
            size: 12
          }
        }
      },
      y: {
        // beginAtZero: true,
        suggestedMax: 8,
        suggestedMin: 1,
        reverse: true,
        ticks: {
          // maxTickslimit: 4,
          font: {
            size: 10
          },
          callback: labelFunc
        }
      }
    }
  };

  return (

    // <CountryProvider>
    <Container w={{ base: '400px', sm: '500px', md: '600px', lg: '800px' }} mx='auto' minW='400px' maxW='800px'>
      <Head>
        <title>🏆FIFA World Cup Results🏆</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/ball.png" />
      </Head>

      <main>
        <div style={{ position: 'sticky', top: '0', zIndex: '10' }}>
          <Box h={{ base: '310px', sm: '310px', md: '350px', lg: '450px' }} pt='4' bgColor='white'>
            <Text textAlign='center' fontSize={{ base: '2xl', sm: '2xl', md: '2xl', lg: '2xl' }}>🏆FIFA World Cup Results🏆</Text>
            {/* <Center>
              <Flex>
                <Text w='40' textAlign='center' fontSize={{ base: 'xl', sm: 'xl', md: '2xl', lg: 'xl' }}>{country1}{country2}{country3}{country4}</Text>
              </Flex>
            </Center> */}
            <Line data={data} options={options}></Line>
          </Box>
          <Grid templateColumns='repeat(4, 1fr)' gap={5} w={96} bg='white' mx='auto' mb={3}>
            <Button colorScheme='teal' size='sm' onClick={showCountry1}>
              Country1
            </Button>
            <Button colorScheme='teal' size='sm' onClick={showCountry2}>
              Country2
            </Button>
            <Button colorScheme='teal' size='sm' onClick={showCountry3}>
              Country3
            </Button>
            <Button colorScheme='teal' size='sm' onClick={showCountry4}>
              Country4
            </Button>
          </Grid>
        </div>



        <Flex>
          {showCountry1Accordion &&
            <Accordion allowToggle w='100%'>
              <Text textAlign='center' mb='5'>Country1</Text>
              <AccordionPart result={asia} setCountry={setAsia} />
              <AccordionPart result={africa} setCountry={setAfrica} />
              <AccordionPart result={europe} setCountry={setEurope} />
              <AccordionPart result={oceania} setCountry={setOceania} />
              <AccordionPart result={southamerica} setCountry={setSouthAmerica} />
              <AccordionPart result={ncac} setCountry={setNcac} />
            </Accordion>
          }

          {showCountry2Accordion &&
            <Accordion allowToggle w='100%'>
              <Text textAlign='center' mb='5'>Country2</Text>
              <AccordionPart result={asia} setCountry={setAsia2} />
              <AccordionPart result={africa} setCountry={setAfrica2} />
              <AccordionPart result={europe} setCountry={setEurope2} />
              <AccordionPart result={oceania} setCountry={setOceania2} />
              <AccordionPart result={southamerica} setCountry={setSouthAmerica2} />
              <AccordionPart result={ncac} setCountry={setNcac2} />
            </Accordion>
          }

          {showCountry3Accordion &&
            <Accordion allowToggle w='100%'>
              <Text textAlign='center' mb='5'>Country3</Text>
              <AccordionPart result={asia} setCountry={setAsia3} />
              <AccordionPart result={africa} setCountry={setAfrica3} />
              <AccordionPart result={europe} setCountry={setEurope3} />
              <AccordionPart result={oceania} setCountry={setOceania3} />
              <AccordionPart result={southamerica} setCountry={setSouthAmerica3} />
              <AccordionPart result={ncac} setCountry={setNcac3} />
            </Accordion>
          }

          {showCountry4Accordion &&
            <Accordion allowToggle w='100%'>
              <Text textAlign='center' mb='5'>Country4</Text>
              <AccordionPart result={asia} setCountry={setAsia4} />
              <AccordionPart result={africa} setCountry={setAfrica4} />
              <AccordionPart result={europe} setCountry={setEurope4} />
              <AccordionPart result={oceania} setCountry={setOceania4} />
              <AccordionPart result={southamerica} setCountry={setSouthAmerica4} />
              <AccordionPart result={ncac} setCountry={setNcac4} />
            </Accordion>
          }

        </Flex>
      </main>

      {/* 
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </Container >
    // </CountryProvider>
  )
}

export default Home

const labelFunc = (label: any) => {
  switch (label) {
    case 1:
      return '1';
    case 2:
      return '2'
    case 3:
      return '3'
    case 4:
      return '4'
    case 5:
      return 'Quarter Finals'
    case 6:
      return 'Round of 16'
    case 7:
      return 'Group Stage'
    case 8:
      return 'Not Participating'
  }
}

export async function getStaticProps() {
  const countryData = await loadCountries()

  return {
    props: {
      countryData,
    },
  }
}
