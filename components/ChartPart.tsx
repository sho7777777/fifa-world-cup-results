import { Country, Region } from "../type/countryType";
import { appTitle, countryLabels, yearLabel } from "../const/label";

// Components
import { AccordionGroup } from "./AccordionGroup";
import { ButtonPart } from "./ButtonPart";
import { Footer } from "./Footer";
import { Header } from "./Header";

// hooks
import { useContext, useState } from "react";
import { useCountries } from "../hooks/useCountries";
import { useFinalResults } from "../hooks/useFinalResults";

import { CountryData } from "../pages";

import { Line } from "react-chartjs-2";
import {
  CategoryScale,
  Chart as ChartJS,
  ChartData,
  ChartOptions,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";

import { Box, Container, Flex, Grid, Text } from "@chakra-ui/react";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

export const ChartPart = () => {
  type SelectedCountry = {
    name: string;
    results: number[];
  };
  const [country1, setCountry1] = useState<SelectedCountry>({
    name: "",
    results: [],
  });
  const [country2, setCountry2] = useState<SelectedCountry>({
    name: "",
    results: [],
  });
  const [country3, setCountry3] = useState<SelectedCountry>({
    name: "",
    results: [],
  });
  const [country4, setCountry4] = useState<SelectedCountry>({
    name: "",
    results: [],
  });

  const [finalMatchResults, setFinalMatchResults] = useState<string[]>([]);

  const countryData: Region = useContext(CountryData);

  // Flag for displaying Accordion Area.
  type CountryAccordion = {
    country1: boolean;
    country2: boolean;
    country3: boolean;
    country4: boolean;
  };
  const [showCountryAccordion, setShowCountryAccordion] =
    useState<CountryAccordion>({
      country1: true,
      country2: false,
      country3: false,
      country4: false,
    });

  const showCountry: (countryNum: string) => void = (countryNum) => {
    switch (countryNum) {
      case "1":
        setShowCountryAccordion((prevState) => ({
          ...prevState,
          country1: true,
          country2: false,
          country3: false,
          country4: false,
        }));
        break;
      case "2":
        setShowCountryAccordion((prevState) => ({
          ...prevState,
          country1: false,
          country2: true,
          country3: false,
          country4: false,
        }));
        break;
      case "3":
        setShowCountryAccordion((prevState) => ({
          ...prevState,
          country1: false,
          country2: false,
          country3: true,
          country4: false,
        }));
        break;
      case "4":
        setShowCountryAccordion((prevState) => ({
          ...prevState,
          country1: false,
          country2: false,
          country3: false,
          country4: true,
        }));
        break;
    }
  };

  const createResultArray = useFinalResults();
  const setCountries = useCountries();

  const setCountry = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // Get index and region info.
    const indexAndRegion: string = (e.target as HTMLButtonElement).value;
    const text: string[] = indexAndRegion.split(":");
    const i: number = parseInt(text[0]);
    const region: string = text[1];

    const cData: Country[] = setCountries(region, countryData);
    const { resultsArr, finalMatchresults, countryName } = createResultArray(
      i,
      cData
    );
    setFinalMatchResults(finalMatchresults);

    if (showCountryAccordion.country1) {
      setCountry1((prevState) => ({
        ...prevState,
        name: countryName,
        results: resultsArr,
      }));
    } else if (showCountryAccordion.country2) {
      setCountry2((prevState) => ({
        ...prevState,
        name: countryName,
        results: resultsArr,
      }));
    } else if (showCountryAccordion.country3) {
      setCountry3((prevState) => ({
        ...prevState,
        name: countryName,
        results: resultsArr,
      }));
    } else if (showCountryAccordion.country4) {
      setCountry4((prevState) => ({
        ...prevState,
        name: countryName,
        results: resultsArr,
      }));
    }
  };

  const labels: string[] = yearLabel;
  const data: ChartData<"line"> = {
    labels: labels,
    datasets: [
      {
        data: country1.results,
        label: country1.name,
        backgroundColor: "#ffffff",
        borderColor: "#da70d6",
      },
      {
        data: country2.results,
        label: country2.name,
        backgroundColor: "#ffffff",
        borderColor: "#7fffd4",
      },
      {
        data: country3.results,
        label: country3.name,
        backgroundColor: "#ffffff",
        borderColor: "#ff7f50",
      },
      {
        data: country4.results,
        label: country4.name,
        backgroundColor: "#ffffff",
        borderColor: "#a9a9a9",
      },
    ],
  };
  const options: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
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
                return "1";
              case 2:
                return "2";
              case 3:
                return "3";
              case 4:
                return "4";
              case 5:
                return "Quarter Finals";
              case 6:
                return "Round of 16";
              case 7:
                return "Group Stage";
              case 8:
                return "Not Participating";
            }
          },
          footer: function (tooltipItems) {
            let finalMatchResult;
            tooltipItems.forEach(function (tooltipItem) {
              finalMatchResult = finalMatchResults[tooltipItem.dataIndex];
            });
            return finalMatchResult;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 12,
          },
        },
      },
      y: {
        // beginAtZero: true,
        suggestedMax: 8,
        suggestedMin: 1,
        reverse: true,
        ticks: {
          // maxTickslimit: 4,
          font: {
            size: 10,
          },
          callback: labelFunc,
        },
      },
    },
  };

  return (
    <>
      <Container
        w={{ base: "400px", sm: "500px", md: "600px", lg: "800px" }}
        mx="auto"
        minW="400px"
        maxW="800px"
      >
        <Header />

        <main>
          <Box position="sticky" top="0" zIndex="5">
            <Box
              h={{ base: "310px", sm: "310px", md: "350px", lg: "450px" }}
              pt="4"
              bgColor="white"
            >
              <Text
                textAlign="center"
                fontSize={{ base: "2xl", sm: "2xl", md: "2xl", lg: "2xl" }}
              >
                {appTitle}
              </Text>
              <Line data={data} options={options}></Line>
            </Box>

            <Grid
              templateColumns="repeat(4, 1fr)"
              gap={5}
              w={96}
              bg="white"
              mx="auto"
              mb={3}
            >
              <ButtonPart
                groupName={countryLabels.Country1}
                showCountryFunc={showCountry}
                countryNo="1"
              />
              <ButtonPart
                groupName={countryLabels.Country2}
                showCountryFunc={showCountry}
                countryNo="2"
              />
              <ButtonPart
                groupName={countryLabels.Country3}
                showCountryFunc={showCountry}
                countryNo="3"
              />
              <ButtonPart
                groupName={countryLabels.Country4}
                showCountryFunc={showCountry}
                countryNo="4"
              />
            </Grid>
          </Box>

          <Flex mb={20}>
            {showCountryAccordion.country1 && (
              <AccordionGroup
                setCountry={setCountry}
                groupName={countryLabels.Country1}
              />
            )}
            {showCountryAccordion.country2 && (
              <AccordionGroup
                setCountry={setCountry}
                groupName={countryLabels.Country2}
              />
            )}
            {showCountryAccordion.country3 && (
              <AccordionGroup
                setCountry={setCountry}
                groupName={countryLabels.Country3}
              />
            )}
            {showCountryAccordion.country4 && (
              <AccordionGroup
                setCountry={setCountry}
                groupName={countryLabels.Country4}
              />
            )}
          </Flex>
        </main>
      </Container>

      <Footer />
    </>
  );
};

const labelFunc = (label: any) => {
  switch (label) {
    case 1:
      return "1";
    case 2:
      return "2";
    case 3:
      return "3";
    case 4:
      return "4";
    case 5:
      return "Quarter Finals";
    case 6:
      return "Round of 16";
    case 7:
      return "Group Stage";
    case 8:
      return "Not Participating";
  }
};
