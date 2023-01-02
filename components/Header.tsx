import Head from "next/head";
import { appTitle, svg } from "../const/label";

export const Header = () => {
  return (
    <Head>
      <title>{appTitle}</title>
      <meta name="description" content="FIFA World Cup Results" />
      <link rel="icon" href={svg} />
    </Head>
  );
};
