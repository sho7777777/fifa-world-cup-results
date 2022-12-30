import { Country, Region } from '../type/countryType'
import { label, countryLabels, appTitle } from '../const/label'
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Title,
  Tooltip, Legend, ChartData, ChartOptions,
} from 'chart.js';
import { useState, useContext, FC } from 'react'
import { CountryData } from '../pages'
import { useCountries } from '../hooks/useCountries';

import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Grid,
  Text,
} from '@chakra-ui/react';
import { AccordionPart } from '../components/AccordionPart'
import { useFinalResults } from '../hooks/useFinalResults';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
)

import { AccordionGroup } from './AccordionGroup';
import { Header } from './Header';
import { ButtonPart } from './ButtonPart';
import { Footer } from './Footer';

export const ChartPart = () => {

  const [data1, setData1] = useState<number[]>([])
  const [data2, setData2] = useState<number[]>([])
  const [data3, setData3] = useState<number[]>([])
  const [data4, setData4] = useState<number[]>([])
  const [country1, setCountry1] = useState<string>("")
  const [country2, setCountry2] = useState<string>("")
  const [country3, setCountry3] = useState<string>("")
  const [country4, setCountry4] = useState<string>("")
  const [finalMatch, setFinalMatch] = useState<string[]>([])

  const countryData: Region = useContext(CountryData)

  // const [showCountry1Accordion, setShowCountry1Accordion] = useState<boolean>(true)
  // const [showCountry2Accordion, setShowCountry2Accordion] = useState<boolean>(false)
  // const [showCountry3Accordion, setShowCountry3Accordion] = useState<boolean>(false)
  // const [showCountry4Accordion, setShowCountry4Accordion] = useState<boolean>(false)

  type CountryAccordion = {
    country1: boolean,
    country2: boolean,
    country3: boolean,
    country4: boolean,
  }
  const [showCountryAccordion, setShowCountryAccordion] = useState<CountryAccordion>({
    country1: true,
    country2: false,
    country3: false,
    country4: false,
  })

  const showCountry1: () => void = () => {
    // setShowCountry1Accordion(true)
    // setShowCountry2Accordion(false)
    // setShowCountry3Accordion(false)
    // setShowCountry4Accordion(false)
    setShowCountryAccordion(prevState => ({
      ...prevState,
      country1: true,
      country2: false,
      country3: false,
      country4: false
    }))
  }

  const showCountry2: () => void = () => {
    // setShowCountry1Accordion(false)
    // setShowCountry2Accordion(true)
    // setShowCountry3Accordion(false)
    // setShowCountry4Accordion(false)
    setShowCountryAccordion(prevState => ({
      ...prevState,
      country1: false,
      country2: true,
      country3: false,
      country4: false
    }))
  }

  const showCountry3: () => void = () => {
    // setShowCountry1Accordion(false)
    // setShowCountry2Accordion(false)
    // setShowCountry3Accordion(true)
    // setShowCountry4Accordion(false)
    setShowCountryAccordion(prevState => ({
      ...prevState,
      country1: false,
      country2: false,
      country3: true,
      country4: false
    }))
  }

  const showCountry4: () => void = () => {
    // setShowCountry1Accordion(false)
    // setShowCountry2Accordion(false)
    // setShowCountry3Accordion(false)
    // setShowCountry4Accordion(true)
    setShowCountryAccordion(prevState => ({
      ...prevState,
      country1: false,
      country2: false,
      country3: false,
      country4: true
    }))
  }

  const createResultArray = useFinalResults();
  const setCountries = useCountries();

  const setCountry = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

    // index情報とregion情報を取り出す。
    const indexRegion: string = (e.target as HTMLButtonElement).value;
    const text: string[] = indexRegion.split(":")
    const i: number = parseInt(text[0]);
    const region: string = text[1];

    const cData: Country[] = setCountries(region, countryData);
    const { dataArr, finalMatches, countryName } = createResultArray(i, cData)
    setFinalMatch(finalMatches)

    if (showCountryAccordion.country1) {
      setCountry1(countryName)
      setData1(dataArr)
    } else if (showCountryAccordion.country2) {
      setCountry2(countryName)
      setData2(dataArr)
    } else if (showCountryAccordion.country3) {
      setCountry3(countryName)
      setData3(dataArr)
    } else if (showCountryAccordion.country4) {
      setCountry4(countryName)
      setData4(dataArr)
    }
  }

  const labels: string[] = label;
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
    <Container w={{ base: '400px', sm: '500px', md: '600px', lg: '800px' }} mx='auto' minW='400px' maxW='800px'>
      <Header />
      <main>
        <div style={{ position: 'sticky', top: '0', zIndex: '10' }}>
          <Box h={{ base: '310px', sm: '310px', md: '350px', lg: '450px' }} pt='4' bgColor='white'>
            <Text textAlign='center' fontSize={{ base: '2xl', sm: '2xl', md: '2xl', lg: '2xl' }}>{appTitle}</Text>
            {/* <Center>
              <Flex>
                <Text w='40' textAlign='center' fontSize={{ base: 'xl', sm: 'xl', md: '2xl', lg: 'xl' }}>{country1}{country2}{country3}{country4}</Text>
              </Flex>
            </Center> */}
            <Line data={data} options={options}></Line>
          </Box>

          <Grid templateColumns='repeat(4, 1fr)' gap={5} w={96} bg='white' mx='auto' mb={3}>
            <ButtonPart groupName={countryLabels.Country1} showCountryFunc={showCountry1} />
            <ButtonPart groupName={countryLabels.Country2} showCountryFunc={showCountry2} />
            <ButtonPart groupName={countryLabels.Country3} showCountryFunc={showCountry3} />
            <ButtonPart groupName={countryLabels.Country4} showCountryFunc={showCountry4} />
          </Grid>
        </div>

        <Flex>
          {showCountryAccordion.country1 && <AccordionGroup setCountry={setCountry} groupName={countryLabels.Country1} />}
          {/* {showCountry1Accordion && <AccordionGroup setCountry={setCountry} groupName={countryLabels.Country1} />} */}
          {showCountryAccordion.country2 && <AccordionGroup setCountry={setCountry} groupName={countryLabels.Country2} />}
          {showCountryAccordion.country3 && <AccordionGroup setCountry={setCountry} groupName={countryLabels.Country3} />}
          {showCountryAccordion.country4 && <AccordionGroup setCountry={setCountry} groupName={countryLabels.Country4} />}
        </Flex>
      </main>
      <Footer />
    </Container >
  )
}

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
