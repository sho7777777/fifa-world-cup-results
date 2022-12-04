import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { label } from '../const/label'
import { Line } from 'react-chartjs-2';
// import { result } from '../result';
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
  Ticks
} from 'chart.js';
import { useState } from 'react'

import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionIcon,
  AccordionPanel,
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Spacer,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
)

const Home: NextPage = (result: any) => {

  // console.log("result: ", result.countryData)
  const asia = result.countryData[0]
  const africa = result.countryData[1]
  const europe = result.countryData[2]
  const oceania = result.countryData[3]
  const southamerica = result.countryData[4]
  const ncac = result.countryData[5]
  // console.log("result.result[i]: ", result.result[i])
  // console.log(result.result[i].total["year1930"].result)
  const [data1, setData1] = useState<number[]>([])
  const [country, setCountry] = useState<string>("")
  const [finalMatch, setFinalMatch] = useState<string[]>([])


  // const SetData = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  const SetData = (e: any) => {
    const i: number = parseInt(e.target.value) - 1;
    // const i = e.target.value;
    const data: number[] = [];
    // console.log("i: ", i)
    setCountry(result.countryData[i].country + " " + result.countryData[i].flag)
    data.push(parseInt(result.countryData[i].total["year1930"].result))
    data.push(parseInt(result.countryData[i].total["year1934"].result))
    data.push(parseInt(result.countryData[i].total["year1938"].result))
    data.push(parseInt(result.countryData[i].total["year1950"].result))
    data.push(parseInt(result.countryData[i].total["year1954"].result))
    data.push(parseInt(result.countryData[i].total["year1958"].result))
    data.push(parseInt(result.countryData[i].total["year1962"].result))
    data.push(parseInt(result.countryData[i].total["year1966"].result))
    data.push(parseInt(result.countryData[i].total["year1970"].result))
    data.push(parseInt(result.countryData[i].total["year1974"].result))
    data.push(parseInt(result.countryData[i].total["year1978"].result))
    data.push(parseInt(result.countryData[i].total["year1982"].result))
    data.push(parseInt(result.countryData[i].total["year1986"].result))
    data.push(parseInt(result.countryData[i].total["year1990"].result))
    data.push(parseInt(result.countryData[i].total["year1994"].result))
    data.push(parseInt(result.countryData[i].total["year1998"].result))
    data.push(parseInt(result.countryData[i].total["year2002"].result))
    data.push(parseInt(result.countryData[i].total["year2006"].result))
    data.push(parseInt(result.countryData[i].total["year2010"].result))
    data.push(parseInt(result.countryData[i].total["year2014"].result))
    data.push(parseInt(result.countryData[i].total["year2018"].result))
    setData1(data)
  }

  const SetAsia = (e: any) => {
    const i: number = parseInt(e.target.value);
    // const i = e.target.value;
    const data: number[] = [];
    // console.log("i: ", i)
    setCountry(asia[i].country + " " + asia[i].flag)
    data.push(parseInt(asia[i].total["year1930"].result))
    data.push(parseInt(asia[i].total["year1934"].result))
    data.push(parseInt(asia[i].total["year1938"].result))
    data.push(parseInt(asia[i].total["year1950"].result))
    data.push(parseInt(asia[i].total["year1954"].result))
    data.push(parseInt(asia[i].total["year1958"].result))
    data.push(parseInt(asia[i].total["year1962"].result))
    data.push(parseInt(asia[i].total["year1966"].result))
    data.push(parseInt(asia[i].total["year1970"].result))
    data.push(parseInt(asia[i].total["year1974"].result))
    data.push(parseInt(asia[i].total["year1978"].result))
    data.push(parseInt(asia[i].total["year1982"].result))
    data.push(parseInt(asia[i].total["year1986"].result))
    data.push(parseInt(asia[i].total["year1990"].result))
    data.push(parseInt(asia[i].total["year1994"].result))
    data.push(parseInt(asia[i].total["year1998"].result))
    data.push(parseInt(asia[i].total["year2002"].result))
    data.push(parseInt(asia[i].total["year2006"].result))
    data.push(parseInt(asia[i].total["year2010"].result))
    data.push(parseInt(asia[i].total["year2014"].result))
    data.push(parseInt(asia[i].total["year2018"].result))
    setData1(data)
    const finalMatches: string[] = [];
    const finalMatch1930: string = asia[i].total["year1930"].opponent + " " + asia[i].total["year1930"].score;
    const finalMatch1934: string = asia[i].total["year1934"].opponent + " " + asia[i].total["year1934"].score;
    const finalMatch1938: string = asia[i].total["year1938"].opponent + " " + asia[i].total["year1938"].score;
    const finalMatch1950: string = asia[i].total["year1950"].opponent + " " + asia[i].total["year1950"].score;
    const finalMatch1954: string = asia[i].total["year1954"].opponent + " " + asia[i].total["year1954"].score;
    const finalMatch1958: string = asia[i].total["year1958"].opponent + " " + asia[i].total["year1958"].score;
    const finalMatch1962: string = asia[i].total["year1962"].opponent + " " + asia[i].total["year1962"].score;
    const finalMatch1966: string = asia[i].total["year1966"].opponent + " " + asia[i].total["year1966"].score;
    const finalMatch1970: string = asia[i].total["year1970"].opponent + " " + asia[i].total["year1970"].score;
    const finalMatch1974: string = asia[i].total["year1974"].opponent + " " + asia[i].total["year1974"].score;
    const finalMatch1978: string = asia[i].total["year1978"].opponent + " " + asia[i].total["year1978"].score;
    const finalMatch1982: string = asia[i].total["year1982"].opponent + " " + asia[i].total["year1982"].score;
    const finalMatch1986: string = asia[i].total["year1986"].opponent + " " + asia[i].total["year1986"].score;
    const finalMatch1990: string = asia[i].total["year1990"].opponent + " " + asia[i].total["year1990"].score;
    const finalMatch1994: string = asia[i].total["year1994"].opponent + " " + asia[i].total["year1994"].score;
    const finalMatch1998: string = asia[i].total["year1998"].opponent + " " + asia[i].total["year1998"].score;
    const finalMatch2002: string = asia[i].total["year2002"].opponent + " " + asia[i].total["year2002"].score;
    const finalMatch2006: string = asia[i].total["year2006"].opponent + " " + asia[i].total["year2006"].score;
    const finalMatch2010: string = asia[i].total["year2010"].opponent + " " + asia[i].total["year2010"].score;
    const finalMatch2014: string = asia[i].total["year2014"].opponent + " " + asia[i].total["year2014"].score;
    const finalMatch2018: string = asia[i].total["year2018"].opponent + " " + asia[i].total["year2018"].score;

    finalMatches.push(finalMatch1930)
    finalMatches.push(finalMatch1934)
    finalMatches.push(finalMatch1938)
    finalMatches.push(finalMatch1950)
    finalMatches.push(finalMatch1954)
    finalMatches.push(finalMatch1958)
    finalMatches.push(finalMatch1962)
    finalMatches.push(finalMatch1966)
    finalMatches.push(finalMatch1970)
    finalMatches.push(finalMatch1974)
    finalMatches.push(finalMatch1978)
    finalMatches.push(finalMatch1982)
    finalMatches.push(finalMatch1986)
    finalMatches.push(finalMatch1990)
    finalMatches.push(finalMatch1994)
    finalMatches.push(finalMatch1998)
    finalMatches.push(finalMatch2002)
    finalMatches.push(finalMatch2006)
    finalMatches.push(finalMatch2010)
    finalMatches.push(finalMatch2014)
    finalMatches.push(finalMatch2018)

    setFinalMatch(finalMatches)
  }

  const SetAfrica = (e: any) => {
    const i: number = parseInt(e.target.value);
    // const i = e.target.value;
    const data: number[] = [];
    // console.log("i: ", i)
    setCountry(africa[i].country + " " + africa[i].flag)
    data.push(parseInt(africa[i].total["year1930"].result))
    data.push(parseInt(africa[i].total["year1934"].result))
    data.push(parseInt(africa[i].total["year1938"].result))
    data.push(parseInt(africa[i].total["year1950"].result))
    data.push(parseInt(africa[i].total["year1954"].result))
    data.push(parseInt(africa[i].total["year1958"].result))
    data.push(parseInt(africa[i].total["year1962"].result))
    data.push(parseInt(africa[i].total["year1966"].result))
    data.push(parseInt(africa[i].total["year1970"].result))
    data.push(parseInt(africa[i].total["year1974"].result))
    data.push(parseInt(africa[i].total["year1978"].result))
    data.push(parseInt(africa[i].total["year1982"].result))
    data.push(parseInt(africa[i].total["year1986"].result))
    data.push(parseInt(africa[i].total["year1990"].result))
    data.push(parseInt(africa[i].total["year1994"].result))
    data.push(parseInt(africa[i].total["year1998"].result))
    data.push(parseInt(africa[i].total["year2002"].result))
    data.push(parseInt(africa[i].total["year2006"].result))
    data.push(parseInt(africa[i].total["year2010"].result))
    data.push(parseInt(africa[i].total["year2014"].result))
    data.push(parseInt(africa[i].total["year2018"].result))
    setData1(data)

    const finalMatches: string[] = [];
    const finalMatch1930: string = africa[i].total["year1930"].opponent + " " + africa[i].total["year1930"].score;
    const finalMatch1934: string = africa[i].total["year1934"].opponent + " " + africa[i].total["year1934"].score;
    const finalMatch1938: string = africa[i].total["year1938"].opponent + " " + africa[i].total["year1938"].score;
    const finalMatch1950: string = africa[i].total["year1950"].opponent + " " + africa[i].total["year1950"].score;
    const finalMatch1954: string = africa[i].total["year1954"].opponent + " " + africa[i].total["year1954"].score;
    const finalMatch1958: string = africa[i].total["year1958"].opponent + " " + africa[i].total["year1958"].score;
    const finalMatch1962: string = africa[i].total["year1962"].opponent + " " + africa[i].total["year1962"].score;
    const finalMatch1966: string = africa[i].total["year1966"].opponent + " " + africa[i].total["year1966"].score;
    const finalMatch1970: string = africa[i].total["year1970"].opponent + " " + africa[i].total["year1970"].score;
    const finalMatch1974: string = africa[i].total["year1974"].opponent + " " + africa[i].total["year1974"].score;
    const finalMatch1978: string = africa[i].total["year1978"].opponent + " " + africa[i].total["year1978"].score;
    const finalMatch1982: string = africa[i].total["year1982"].opponent + " " + africa[i].total["year1982"].score;
    const finalMatch1986: string = africa[i].total["year1986"].opponent + " " + africa[i].total["year1986"].score;
    const finalMatch1990: string = africa[i].total["year1990"].opponent + " " + africa[i].total["year1990"].score;
    const finalMatch1994: string = africa[i].total["year1994"].opponent + " " + africa[i].total["year1994"].score;
    const finalMatch1998: string = africa[i].total["year1998"].opponent + " " + africa[i].total["year1998"].score;
    const finalMatch2002: string = africa[i].total["year2002"].opponent + " " + africa[i].total["year2002"].score;
    const finalMatch2006: string = africa[i].total["year2006"].opponent + " " + africa[i].total["year2006"].score;
    const finalMatch2010: string = africa[i].total["year2010"].opponent + " " + africa[i].total["year2010"].score;
    const finalMatch2014: string = africa[i].total["year2014"].opponent + " " + africa[i].total["year2014"].score;
    const finalMatch2018: string = africa[i].total["year2018"].opponent + " " + africa[i].total["year2018"].score;

    finalMatches.push(finalMatch1930)
    finalMatches.push(finalMatch1934)
    finalMatches.push(finalMatch1938)
    finalMatches.push(finalMatch1950)
    finalMatches.push(finalMatch1954)
    finalMatches.push(finalMatch1958)
    finalMatches.push(finalMatch1962)
    finalMatches.push(finalMatch1966)
    finalMatches.push(finalMatch1970)
    finalMatches.push(finalMatch1974)
    finalMatches.push(finalMatch1978)
    finalMatches.push(finalMatch1982)
    finalMatches.push(finalMatch1986)
    finalMatches.push(finalMatch1990)
    finalMatches.push(finalMatch1994)
    finalMatches.push(finalMatch1998)
    finalMatches.push(finalMatch2002)
    finalMatches.push(finalMatch2006)
    finalMatches.push(finalMatch2010)
    finalMatches.push(finalMatch2014)
    finalMatches.push(finalMatch2018)

    setFinalMatch(finalMatches)
  }

  const SetEurope = (e: any) => {
    const i: number = parseInt(e.target.value);
    // const i = e.target.value;
    const data: number[] = [];
    // console.log("i: ", i)
    setCountry(europe[i].country + " " + europe[i].flag)
    data.push(parseInt(europe[i].total["year1930"].result))
    data.push(parseInt(europe[i].total["year1934"].result))
    data.push(parseInt(europe[i].total["year1938"].result))
    data.push(parseInt(europe[i].total["year1950"].result))
    data.push(parseInt(europe[i].total["year1954"].result))
    data.push(parseInt(europe[i].total["year1958"].result))
    data.push(parseInt(europe[i].total["year1962"].result))
    data.push(parseInt(europe[i].total["year1966"].result))
    data.push(parseInt(europe[i].total["year1970"].result))
    data.push(parseInt(europe[i].total["year1974"].result))
    data.push(parseInt(europe[i].total["year1978"].result))
    data.push(parseInt(europe[i].total["year1982"].result))
    data.push(parseInt(europe[i].total["year1986"].result))
    data.push(parseInt(europe[i].total["year1990"].result))
    data.push(parseInt(europe[i].total["year1994"].result))
    data.push(parseInt(europe[i].total["year1998"].result))
    data.push(parseInt(europe[i].total["year2002"].result))
    data.push(parseInt(europe[i].total["year2006"].result))
    data.push(parseInt(europe[i].total["year2010"].result))
    data.push(parseInt(europe[i].total["year2014"].result))
    data.push(parseInt(europe[i].total["year2018"].result))
    setData1(data)

    const finalMatches: string[] = [];
    const finalMatch1930: string = europe[i].total["year1930"].opponent + " " + europe[i].total["year1930"].score;
    const finalMatch1934: string = europe[i].total["year1934"].opponent + " " + europe[i].total["year1934"].score;
    const finalMatch1938: string = europe[i].total["year1938"].opponent + " " + europe[i].total["year1938"].score;
    const finalMatch1950: string = europe[i].total["year1950"].opponent + " " + europe[i].total["year1950"].score;
    const finalMatch1954: string = europe[i].total["year1954"].opponent + " " + europe[i].total["year1954"].score;
    const finalMatch1958: string = europe[i].total["year1958"].opponent + " " + europe[i].total["year1958"].score;
    const finalMatch1962: string = europe[i].total["year1962"].opponent + " " + europe[i].total["year1962"].score;
    const finalMatch1966: string = europe[i].total["year1966"].opponent + " " + europe[i].total["year1966"].score;
    const finalMatch1970: string = europe[i].total["year1970"].opponent + " " + europe[i].total["year1970"].score;
    const finalMatch1974: string = europe[i].total["year1974"].opponent + " " + europe[i].total["year1974"].score;
    const finalMatch1978: string = europe[i].total["year1978"].opponent + " " + europe[i].total["year1978"].score;
    const finalMatch1982: string = europe[i].total["year1982"].opponent + " " + europe[i].total["year1982"].score;
    const finalMatch1986: string = europe[i].total["year1986"].opponent + " " + europe[i].total["year1986"].score;
    const finalMatch1990: string = europe[i].total["year1990"].opponent + " " + europe[i].total["year1990"].score;
    const finalMatch1994: string = europe[i].total["year1994"].opponent + " " + europe[i].total["year1994"].score;
    const finalMatch1998: string = europe[i].total["year1998"].opponent + " " + europe[i].total["year1998"].score;
    const finalMatch2002: string = europe[i].total["year2002"].opponent + " " + europe[i].total["year2002"].score;
    const finalMatch2006: string = europe[i].total["year2006"].opponent + " " + europe[i].total["year2006"].score;
    const finalMatch2010: string = europe[i].total["year2010"].opponent + " " + europe[i].total["year2010"].score;
    const finalMatch2014: string = europe[i].total["year2014"].opponent + " " + europe[i].total["year2014"].score;
    const finalMatch2018: string = europe[i].total["year2018"].opponent + " " + europe[i].total["year2018"].score;

    finalMatches.push(finalMatch1930)
    finalMatches.push(finalMatch1934)
    finalMatches.push(finalMatch1938)
    finalMatches.push(finalMatch1950)
    finalMatches.push(finalMatch1954)
    finalMatches.push(finalMatch1958)
    finalMatches.push(finalMatch1962)
    finalMatches.push(finalMatch1966)
    finalMatches.push(finalMatch1970)
    finalMatches.push(finalMatch1974)
    finalMatches.push(finalMatch1978)
    finalMatches.push(finalMatch1982)
    finalMatches.push(finalMatch1986)
    finalMatches.push(finalMatch1990)
    finalMatches.push(finalMatch1994)
    finalMatches.push(finalMatch1998)
    finalMatches.push(finalMatch2002)
    finalMatches.push(finalMatch2006)
    finalMatches.push(finalMatch2010)
    finalMatches.push(finalMatch2014)
    finalMatches.push(finalMatch2018)

    setFinalMatch(finalMatches)
  }

  const SetOceania = (e: any) => {
    const i: number = parseInt(e.target.value);
    // const i = e.target.value;
    const data: number[] = [];
    // console.log("i: ", i)
    setCountry(oceania[i].country + " " + oceania[i].flag)
    data.push(parseInt(oceania[i].total["year1930"].result))
    data.push(parseInt(oceania[i].total["year1934"].result))
    data.push(parseInt(oceania[i].total["year1938"].result))
    data.push(parseInt(oceania[i].total["year1950"].result))
    data.push(parseInt(oceania[i].total["year1954"].result))
    data.push(parseInt(oceania[i].total["year1958"].result))
    data.push(parseInt(oceania[i].total["year1962"].result))
    data.push(parseInt(oceania[i].total["year1966"].result))
    data.push(parseInt(oceania[i].total["year1970"].result))
    data.push(parseInt(oceania[i].total["year1974"].result))
    data.push(parseInt(oceania[i].total["year1978"].result))
    data.push(parseInt(oceania[i].total["year1982"].result))
    data.push(parseInt(oceania[i].total["year1986"].result))
    data.push(parseInt(oceania[i].total["year1990"].result))
    data.push(parseInt(oceania[i].total["year1994"].result))
    data.push(parseInt(oceania[i].total["year1998"].result))
    data.push(parseInt(oceania[i].total["year2002"].result))
    data.push(parseInt(oceania[i].total["year2006"].result))
    data.push(parseInt(oceania[i].total["year2010"].result))
    data.push(parseInt(oceania[i].total["year2014"].result))
    data.push(parseInt(oceania[i].total["year2018"].result))
    setData1(data)

    const finalMatches: string[] = [];
    const finalMatch1930: string = oceania[i].total["year1930"].opponent + " " + oceania[i].total["year1930"].score;
    const finalMatch1934: string = oceania[i].total["year1934"].opponent + " " + oceania[i].total["year1934"].score;
    const finalMatch1938: string = oceania[i].total["year1938"].opponent + " " + oceania[i].total["year1938"].score;
    const finalMatch1950: string = oceania[i].total["year1950"].opponent + " " + oceania[i].total["year1950"].score;
    const finalMatch1954: string = oceania[i].total["year1954"].opponent + " " + oceania[i].total["year1954"].score;
    const finalMatch1958: string = oceania[i].total["year1958"].opponent + " " + oceania[i].total["year1958"].score;
    const finalMatch1962: string = oceania[i].total["year1962"].opponent + " " + oceania[i].total["year1962"].score;
    const finalMatch1966: string = oceania[i].total["year1966"].opponent + " " + oceania[i].total["year1966"].score;
    const finalMatch1970: string = oceania[i].total["year1970"].opponent + " " + oceania[i].total["year1970"].score;
    const finalMatch1974: string = oceania[i].total["year1974"].opponent + " " + oceania[i].total["year1974"].score;
    const finalMatch1978: string = oceania[i].total["year1978"].opponent + " " + oceania[i].total["year1978"].score;
    const finalMatch1982: string = oceania[i].total["year1982"].opponent + " " + oceania[i].total["year1982"].score;
    const finalMatch1986: string = oceania[i].total["year1986"].opponent + " " + oceania[i].total["year1986"].score;
    const finalMatch1990: string = oceania[i].total["year1990"].opponent + " " + oceania[i].total["year1990"].score;
    const finalMatch1994: string = oceania[i].total["year1994"].opponent + " " + oceania[i].total["year1994"].score;
    const finalMatch1998: string = oceania[i].total["year1998"].opponent + " " + oceania[i].total["year1998"].score;
    const finalMatch2002: string = oceania[i].total["year2002"].opponent + " " + oceania[i].total["year2002"].score;
    const finalMatch2006: string = oceania[i].total["year2006"].opponent + " " + oceania[i].total["year2006"].score;
    const finalMatch2010: string = oceania[i].total["year2010"].opponent + " " + oceania[i].total["year2010"].score;
    const finalMatch2014: string = oceania[i].total["year2014"].opponent + " " + oceania[i].total["year2014"].score;
    const finalMatch2018: string = oceania[i].total["year2018"].opponent + " " + oceania[i].total["year2018"].score;

    finalMatches.push(finalMatch1930)
    finalMatches.push(finalMatch1934)
    finalMatches.push(finalMatch1938)
    finalMatches.push(finalMatch1950)
    finalMatches.push(finalMatch1954)
    finalMatches.push(finalMatch1958)
    finalMatches.push(finalMatch1962)
    finalMatches.push(finalMatch1966)
    finalMatches.push(finalMatch1970)
    finalMatches.push(finalMatch1974)
    finalMatches.push(finalMatch1978)
    finalMatches.push(finalMatch1982)
    finalMatches.push(finalMatch1986)
    finalMatches.push(finalMatch1990)
    finalMatches.push(finalMatch1994)
    finalMatches.push(finalMatch1998)
    finalMatches.push(finalMatch2002)
    finalMatches.push(finalMatch2006)
    finalMatches.push(finalMatch2010)
    finalMatches.push(finalMatch2014)
    finalMatches.push(finalMatch2018)

    setFinalMatch(finalMatches)
  }

  const SetSouthAmerica = (e: any) => {
    const i: number = parseInt(e.target.value);
    // const i = e.target.value;
    const data: number[] = [];
    // console.log("i: ", i)
    setCountry(southamerica[i].country + " " + southamerica[i].flag)
    data.push(parseInt(southamerica[i].total["year1930"].result))
    data.push(parseInt(southamerica[i].total["year1934"].result))
    data.push(parseInt(southamerica[i].total["year1938"].result))
    data.push(parseInt(southamerica[i].total["year1950"].result))
    data.push(parseInt(southamerica[i].total["year1954"].result))
    data.push(parseInt(southamerica[i].total["year1958"].result))
    data.push(parseInt(southamerica[i].total["year1962"].result))
    data.push(parseInt(southamerica[i].total["year1966"].result))
    data.push(parseInt(southamerica[i].total["year1970"].result))
    data.push(parseInt(southamerica[i].total["year1974"].result))
    data.push(parseInt(southamerica[i].total["year1978"].result))
    data.push(parseInt(southamerica[i].total["year1982"].result))
    data.push(parseInt(southamerica[i].total["year1986"].result))
    data.push(parseInt(southamerica[i].total["year1990"].result))
    data.push(parseInt(southamerica[i].total["year1994"].result))
    data.push(parseInt(southamerica[i].total["year1998"].result))
    data.push(parseInt(southamerica[i].total["year2002"].result))
    data.push(parseInt(southamerica[i].total["year2006"].result))
    data.push(parseInt(southamerica[i].total["year2010"].result))
    data.push(parseInt(southamerica[i].total["year2014"].result))
    data.push(parseInt(southamerica[i].total["year2018"].result))
    setData1(data)

    const finalMatches: string[] = [];
    const finalMatch1930: string = southamerica[i].total["year1930"].opponent + " " + southamerica[i].total["year1930"].score;
    const finalMatch1934: string = southamerica[i].total["year1934"].opponent + " " + southamerica[i].total["year1934"].score;
    const finalMatch1938: string = southamerica[i].total["year1938"].opponent + " " + southamerica[i].total["year1938"].score;
    const finalMatch1950: string = southamerica[i].total["year1950"].opponent + " " + southamerica[i].total["year1950"].score;
    const finalMatch1954: string = southamerica[i].total["year1954"].opponent + " " + southamerica[i].total["year1954"].score;
    const finalMatch1958: string = southamerica[i].total["year1958"].opponent + " " + southamerica[i].total["year1958"].score;
    const finalMatch1962: string = southamerica[i].total["year1962"].opponent + " " + southamerica[i].total["year1962"].score;
    const finalMatch1966: string = southamerica[i].total["year1966"].opponent + " " + southamerica[i].total["year1966"].score;
    const finalMatch1970: string = southamerica[i].total["year1970"].opponent + " " + southamerica[i].total["year1970"].score;
    const finalMatch1974: string = southamerica[i].total["year1974"].opponent + " " + southamerica[i].total["year1974"].score;
    const finalMatch1978: string = southamerica[i].total["year1978"].opponent + " " + southamerica[i].total["year1978"].score;
    const finalMatch1982: string = southamerica[i].total["year1982"].opponent + " " + southamerica[i].total["year1982"].score;
    const finalMatch1986: string = southamerica[i].total["year1986"].opponent + " " + southamerica[i].total["year1986"].score;
    const finalMatch1990: string = southamerica[i].total["year1990"].opponent + " " + southamerica[i].total["year1990"].score;
    const finalMatch1994: string = southamerica[i].total["year1994"].opponent + " " + southamerica[i].total["year1994"].score;
    const finalMatch1998: string = southamerica[i].total["year1998"].opponent + " " + southamerica[i].total["year1998"].score;
    const finalMatch2002: string = southamerica[i].total["year2002"].opponent + " " + southamerica[i].total["year2002"].score;
    const finalMatch2006: string = southamerica[i].total["year2006"].opponent + " " + southamerica[i].total["year2006"].score;
    const finalMatch2010: string = southamerica[i].total["year2010"].opponent + " " + southamerica[i].total["year2010"].score;
    const finalMatch2014: string = southamerica[i].total["year2014"].opponent + " " + southamerica[i].total["year2014"].score;
    const finalMatch2018: string = southamerica[i].total["year2018"].opponent + " " + southamerica[i].total["year2018"].score;

    finalMatches.push(finalMatch1930)
    finalMatches.push(finalMatch1934)
    finalMatches.push(finalMatch1938)
    finalMatches.push(finalMatch1950)
    finalMatches.push(finalMatch1954)
    finalMatches.push(finalMatch1958)
    finalMatches.push(finalMatch1962)
    finalMatches.push(finalMatch1966)
    finalMatches.push(finalMatch1970)
    finalMatches.push(finalMatch1974)
    finalMatches.push(finalMatch1978)
    finalMatches.push(finalMatch1982)
    finalMatches.push(finalMatch1986)
    finalMatches.push(finalMatch1990)
    finalMatches.push(finalMatch1994)
    finalMatches.push(finalMatch1998)
    finalMatches.push(finalMatch2002)
    finalMatches.push(finalMatch2006)
    finalMatches.push(finalMatch2010)
    finalMatches.push(finalMatch2014)
    finalMatches.push(finalMatch2018)

    setFinalMatch(finalMatches)
  }

  const SetNcac = (e: any) => {
    const i: number = parseInt(e.target.value);
    // const i = e.target.value;
    const data: number[] = [];
    // console.log("i: ", i)
    setCountry(ncac[i].country + " " + ncac[i].flag)
    data.push(parseInt(ncac[i].total["year1930"].result))
    data.push(parseInt(ncac[i].total["year1934"].result))
    data.push(parseInt(ncac[i].total["year1938"].result))
    data.push(parseInt(ncac[i].total["year1950"].result))
    data.push(parseInt(ncac[i].total["year1954"].result))
    data.push(parseInt(ncac[i].total["year1958"].result))
    data.push(parseInt(ncac[i].total["year1962"].result))
    data.push(parseInt(ncac[i].total["year1966"].result))
    data.push(parseInt(ncac[i].total["year1970"].result))
    data.push(parseInt(ncac[i].total["year1974"].result))
    data.push(parseInt(ncac[i].total["year1978"].result))
    data.push(parseInt(ncac[i].total["year1982"].result))
    data.push(parseInt(ncac[i].total["year1986"].result))
    data.push(parseInt(ncac[i].total["year1990"].result))
    data.push(parseInt(ncac[i].total["year1994"].result))
    data.push(parseInt(ncac[i].total["year1998"].result))
    data.push(parseInt(ncac[i].total["year2002"].result))
    data.push(parseInt(ncac[i].total["year2006"].result))
    data.push(parseInt(ncac[i].total["year2010"].result))
    data.push(parseInt(ncac[i].total["year2014"].result))
    data.push(parseInt(ncac[i].total["year2018"].result))
    setData1(data)

    const finalMatches: string[] = [];
    const finalMatch1930: string = ncac[i].total["year1930"].opponent + " " + ncac[i].total["year1930"].score;
    const finalMatch1934: string = ncac[i].total["year1934"].opponent + " " + ncac[i].total["year1934"].score;
    const finalMatch1938: string = ncac[i].total["year1938"].opponent + " " + ncac[i].total["year1938"].score;
    const finalMatch1950: string = ncac[i].total["year1950"].opponent + " " + ncac[i].total["year1950"].score;
    const finalMatch1954: string = ncac[i].total["year1954"].opponent + " " + ncac[i].total["year1954"].score;
    const finalMatch1958: string = ncac[i].total["year1958"].opponent + " " + ncac[i].total["year1958"].score;
    const finalMatch1962: string = ncac[i].total["year1962"].opponent + " " + ncac[i].total["year1962"].score;
    const finalMatch1966: string = ncac[i].total["year1966"].opponent + " " + ncac[i].total["year1966"].score;
    const finalMatch1970: string = ncac[i].total["year1970"].opponent + " " + ncac[i].total["year1970"].score;
    const finalMatch1974: string = ncac[i].total["year1974"].opponent + " " + ncac[i].total["year1974"].score;
    const finalMatch1978: string = ncac[i].total["year1978"].opponent + " " + ncac[i].total["year1978"].score;
    const finalMatch1982: string = ncac[i].total["year1982"].opponent + " " + ncac[i].total["year1982"].score;
    const finalMatch1986: string = ncac[i].total["year1986"].opponent + " " + ncac[i].total["year1986"].score;
    const finalMatch1990: string = ncac[i].total["year1990"].opponent + " " + ncac[i].total["year1990"].score;
    const finalMatch1994: string = ncac[i].total["year1994"].opponent + " " + ncac[i].total["year1994"].score;
    const finalMatch1998: string = ncac[i].total["year1998"].opponent + " " + ncac[i].total["year1998"].score;
    const finalMatch2002: string = ncac[i].total["year2002"].opponent + " " + ncac[i].total["year2002"].score;
    const finalMatch2006: string = ncac[i].total["year2006"].opponent + " " + ncac[i].total["year2006"].score;
    const finalMatch2010: string = ncac[i].total["year2010"].opponent + " " + ncac[i].total["year2010"].score;
    const finalMatch2014: string = ncac[i].total["year2014"].opponent + " " + ncac[i].total["year2014"].score;
    const finalMatch2018: string = ncac[i].total["year2018"].opponent + " " + ncac[i].total["year2018"].score;

    finalMatches.push(finalMatch1930)
    finalMatches.push(finalMatch1934)
    finalMatches.push(finalMatch1938)
    finalMatches.push(finalMatch1950)
    finalMatches.push(finalMatch1954)
    finalMatches.push(finalMatch1958)
    finalMatches.push(finalMatch1962)
    finalMatches.push(finalMatch1966)
    finalMatches.push(finalMatch1970)
    finalMatches.push(finalMatch1974)
    finalMatches.push(finalMatch1978)
    finalMatches.push(finalMatch1982)
    finalMatches.push(finalMatch1986)
    finalMatches.push(finalMatch1990)
    finalMatches.push(finalMatch1994)
    finalMatches.push(finalMatch1998)
    finalMatches.push(finalMatch2002)
    finalMatches.push(finalMatch2006)
    finalMatches.push(finalMatch2010)
    finalMatches.push(finalMatch2014)
    finalMatches.push(finalMatch2018)

    setFinalMatch(finalMatches)
  }

  const labels = label;
  const data: ChartData<'line'> = {
    labels: labels,
    datasets: [
      {
        data: data1,
        backgroundColor: '#ffffff',
        borderColor: '#da70d6',
      },
      // {
      //   data: [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 7, 6, 7, 6, 7, 6],
      //   backgroundColor: 'transparent',
      //   borderColor: '#7fffd4'
      // },
    ]
  };
  const options: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        display: false
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
      }
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
          callback: labelFunc
        }
      }
    }
  };

  return (
    // <div className={styles.container}>
    <Container w={{ base: '500px', sm: '500px', md: '600px', lg: '800px' }} mx='auto' minW='500px' maxW='800px'>
      <Head>
        <title>🏆FIFA World Cup Results🏆</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/ball.png" />
      </Head>

      <main>
        <div>
          {/* <Box w={{ base: '20%', sm: '600px', md: '600px', lg: '600px' }} h={{ base: '320px', md: '350px', lg: '400px' }} mx='auto' position='fixed' top='0' bgColor='green.200' pt='4' pb='20' zIndex='5'> */}
          <Box h={{ base: '320px', md: '350px', lg: '400px' }} pt='4' pb='20'>
            <Text textAlign='center' fontSize={{ base: '2xl', sm: '2xl', md: '2xl', lg: '2xl' }}>🏆FIFA World Cup Results🏆</Text>
            <Text textAlign='center' fontSize={{ base: '2xl', sm: '2xl', md: '2xl', lg: '2xl' }}>{country}</Text>
            <Line data={data} options={options}></Line>
          </Box>
        </div>

        {/* <Accordion allowToggle mt='400px'> */}
        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex='1' textAlign='left'>
                  Asia
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <SimpleGrid columns={8} spacing={2}>
                {asia.map((result: any, index: any) => (
                  <Box key={result.id} fontSize={{ base: '35px', md: '60px', lg: '65px' }}>
                    {/* <button key={result.id} onClick={SetAsia} value={result.id}> */}
                    <button key={result.id} onClick={SetAsia} value={index}>
                      {result.flag}
                    </button>
                  </Box>
                ))}
              </SimpleGrid>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex='1' textAlign='left'>
                  Africa
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <SimpleGrid columns={8} spacing={2}>
                {africa.map((result: any, index: any) => (
                  <Box key={result.id} fontSize={{ base: '35px', md: '60px', lg: '65px' }}>
                    {/* <button key={result.id} onClick={SetAsia} value={result.id}> */}
                    <button key={result.id} onClick={SetAfrica} value={index}>
                      {result.flag}
                    </button>
                  </Box>
                ))}
              </SimpleGrid>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex='1' textAlign='left'>
                  Europe
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <SimpleGrid columns={8} spacing={2}>
                {europe.map((result: any, index: any) => (
                  <Box key={result.id} fontSize={{ base: '35px', md: '60px', lg: '65px' }}>
                    {/* <button key={result.id} onClick={SetAsia} value={result.id}> */}
                    <button key={result.id} onClick={SetEurope} value={index}>
                      {result.flag}
                    </button>
                  </Box>
                ))}
              </SimpleGrid>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex='1' textAlign='left'>
                  Oceania
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <SimpleGrid columns={8} spacing={2}>
                {oceania.map((result: any, index: any) => (
                  <Box key={result.id} fontSize={{ base: '35px', md: '60px', lg: '65px' }}>
                    {/* <button key={result.id} onClick={SetAsia} value={result.id}> */}
                    <button key={result.id} onClick={SetOceania} value={index}>
                      {result.flag}
                    </button>
                  </Box>
                ))}
              </SimpleGrid>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex='1' textAlign='left'>
                  South America
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <SimpleGrid columns={8} spacing={2}>
                {southamerica.map((result: any, index: any) => (
                  <Box key={result.id} fontSize={{ base: '35px', md: '60px', lg: '65px' }}>
                    {/* <button key={result.id} onClick={SetAsia} value={result.id}> */}
                    <button key={result.id} onClick={SetSouthAmerica} value={index}>
                      {result.flag}
                    </button>
                  </Box>
                ))}
              </SimpleGrid>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex='1' textAlign='left'>
                  North, Central America and Caribbean
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <SimpleGrid columns={8} spacing={2}>
                {ncac.map((result: any, index: any) => (
                  <Box key={result.id} fontSize={{ base: '35px', md: '60px', lg: '65px' }}>
                    {/* <button key={result.id} onClick={SetAsia} value={result.id}> */}
                    <button key={result.id} onClick={SetNcac} value={index}>
                      {result.flag}
                    </button>
                  </Box>
                ))}
              </SimpleGrid>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        {/* <SimpleGrid columns={8} spacing={3} mt={{ base: '320px', md: '340px', lg: '400px' }} backgroundColor='pink.100'>
          {
            result.countryData.map((result: any) => (
              <Box key={result.id} fontSize={{ base: '50px', md: '60px', lg: '70px' }} onClick={SetData}>
                <button key={result.id} onClick={SetData} value={result.id}>
                  {result.flag}
                </button>
                <span>{result.flag}</span>
                {result.flag}
              </Box>
              <Button colorScheme='teal' size='xs' key={result.id} onClick={SetData} value={result.id}>{result.country}</Button>
            ))
          }
        </SimpleGrid> */}
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
    </Container>
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
  const url = 'http://localhost:3000/api/data';
  const res = await fetch(url)
  const result = await res.json()
  // console.log(result[0].region)
  const asia: string[] = []
  const africa: string[] = []
  const europe: string[] = []
  const oceania: string[] = []
  const southamerica: string[] = []
  const ncac: string[] = []

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
  // console.log(ncac)

  const countryData = []
  countryData.push(asia, africa, europe, oceania, southamerica, ncac)
  // console.log(countryData)

  return {
    props: {
      countryData,
      result
    },
  }
}
