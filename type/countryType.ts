export type Region = {
  asia: Country[];
  africa: Country[];
  europe: Country[];
  oceania: Country[];
  southamerica: Country[];
  ncac: Country[];
};

export type Country = {
  id: string;
  country: string;
  region: string;
  flag: string;
  total: Total;
};

export type Total = {
  year1930: Result;
  year1934: Result;
  year1938: Result;
  year1950: Result;
  year1954: Result;
  year1958: Result;
  year1962: Result;
  year1966: Result;
  year1970: Result;
  year1974: Result;
  year1978: Result;
  year1982: Result;
  year1986: Result;
  year1990: Result;
  year1994: Result;
  year1998: Result;
  year2002: Result;
  year2006: Result;
  year2010: Result;
  year2014: Result;
  year2018: Result;
};

export type Result = {
  year: string;
  result: string;
  opponent: string;
  score: string;
};
