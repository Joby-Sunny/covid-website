import { Country } from 'src/app/Interfaces/country';

export class Data {
  public static COUNTRY_LIST: Array<Country> = [
    {
      name: 'USA',
      code: 'USA',
      file: './assets/USA.json',
      icon: './assets/usa-icon.png',
    },
    {
      name: 'India',
      code: 'IND',
      file: './assets/IND.json',
      icon: './assets/india-icon.png',
    },
    {
      name: 'Brazil',
      code: 'BRA',
      file: './assets/BRA.json',
      icon: './assets/brazil-icon.png',
    },
    {
      name: 'France',
      code: 'FRA',
      file: './assets/FRA.json',
      icon: './assets/france-icon.png',
    },
    {
      name: 'Russia',
      code: 'RUS',
      file: './assets/RUS.json',
      icon: './assets/russia-icon.png',
    },
  ];

  public static WORLD_DATA: Country = {
    name: 'World Wide',
    code: 'WORLD',
    file: './assets/WORLD.json',
    icon: './assets/world-icon.png',
  };
}
