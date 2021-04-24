import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/Constants/data';
import { UIRoutes } from 'src/app/Constants/uiroutes';
import { BarGraphData } from 'src/app/Interfaces/bar-graph-data';
import {
  CountryListItem,
  CountryCardsData,
  CountryGeneralData,
} from 'src/app/Interfaces/country';
import { CountriesService } from 'src/app/Services/countries.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
})
export class CountryComponent implements OnInit {
  public countryList: Array<CountryListItem>;
  public countryInfo: CountryGeneralData;
  public graphData: Array<BarGraphData> = [];
  public cardData: CountryCardsData;
  public previousPage: { path: string; label: string } = {
    path: `/${UIRoutes.HISTORY}`,
    label: 'Previous : Covid 19 Pandemic',
  };
  public nextPage: { path: string; label: string } = {
    path: `/${UIRoutes.WORLD}`,
    label: 'Next : Global View',
  };

  constructor(private dataService: CountriesService) {}

  ngOnInit(): void {
    this.countryList = Data.COUNTRY_LIST.map((country) => ({
      ...country,
      selected: false,
    }));
    this.setCountrySelected(this.countryList[0].code);
  }

  setCountrySelected(countryCode): void {
    this.countryList = this.countryList.map((country) => ({
      ...country,
      selected: country.code === countryCode,
    }));
    this.getCountryData(this.countryList.find((country) => country.selected));
  }

  getCountryData(selectedCountry) {
    this.dataService.fetchCountryData(selectedCountry).subscribe((data) => {
      this.dataService
        .parseCountryData(data)
        .subscribe(
          (parsedData: {
            barGraphData: Array<BarGraphData>;
            cardData: CountryCardsData;
            generalData: { location: string; continent: string };
          }) => {
            this.graphData = parsedData.barGraphData;
            this.cardData = parsedData.cardData;
            this.countryInfo = {
              ...selectedCountry,
              ...parsedData.generalData,
            };
          }
        );
    });
  }

  getAvatarSubtitle(): string {
    return `${this.countryInfo.location} | ${this.countryInfo.continent}`;
  }
}
