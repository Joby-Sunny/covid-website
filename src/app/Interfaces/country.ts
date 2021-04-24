export interface Country {
  name: string;
  code: string;
  file: string;
  icon: string;
}
export interface CountryListItem extends Country {
  selected: boolean;
}

export interface CountryGeneralData extends CountryListItem {
  location: string;
  continent: string;
}

export interface CountryCardsData {
  population: number;
  populationDensity: number;
  medianAge: number;
  ageGroup65: number;
  ageGroup70: number;
  lifeExpectancy: number;
  maleSmokers: number;
  femaleSmokers: number;
}
