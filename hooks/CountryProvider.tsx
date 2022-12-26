import { createContext } from "react"
// import { CountryDataX } from "../pages";

export const CountryContext = createContext({})

export const CountryProvider = (props: any) => {
  const { children } = props;
  // const cData = CountryDataX;

  // return (
  //   <CountryProvider value={cData}>
  //     {children}
  //   </CountryProvider>
  // )

}
