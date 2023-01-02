const appTitle: string = "🏆FIFA World Cup Results🏆";

const countryLabels = {
  Country1: "Country1",
  Country2: "Country2",
  Country3: "Country3",
  Country4: "Country4",
};

const regions: string[] = [
  "asia",
  "africa",
  "europe",
  "oceania",
  "southamerica",
  "ncac",
];

const year: string[] = [
  "1930",
  "1934",
  "1938",
  "1950",
  "1954",
  "1958",
  "1962",
  "1966",
  "1970",
  "1974",
  "1978",
  "1982",
  "1986",
  "1990",
  "1994",
  "1998",
  "2002",
  "2006",
  "2010",
  "2014",
  "2018",
];

const yearLabel: string[] = [
  "1930 🇺🇾",
  "1934 🇮🇹",
  "1938 🇫🇷",
  "1950 🇧🇷",
  "1954 🇨🇭",
  "1958 🇸🇪",
  "1962 🇨🇱",
  "1966 🏴󠁧󠁢󠁥󠁮󠁧󠁿",
  "1970 🇲🇽",
  "1974 🇩🇪",
  "1978 🇦🇷",
  "1982 🇪🇸",
  "1986 🇲🇽",
  "1990 🇮🇹",
  "1994 🇺🇸",
  "1998 🇫🇷",
  "2002 🇯🇵 🇰🇷",
  "2006 🇩🇪",
  "2010 🇿🇦",
  "2014 🇧🇷",
  "2018 🇷🇺",
];

const yearY: string[] = [
  "year1930",
  "year1934",
  "year1938",
  "year1950",
  "year1954",
  "year1958",
  "year1962",
  "year1966",
  "year1970",
  "year1974",
  "year1978",
  "year1982",
  "year1986",
  "year1990",
  "year1994",
  "year1998",
  "year2002",
  "year2006",
  "year2010",
  "year2014",
  "year2018",
];

const svg: string = "/ball.png";

// 国データ取得用URL
export const url: string = "http://localhost:3000/api/data";

export { appTitle, countryLabels, regions, year, yearLabel, yearY, svg };
