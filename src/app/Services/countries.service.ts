import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BarGraphData } from 'src/app/Interfaces/bar-graph-data';
import { Country } from 'src/app/Interfaces/country';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor(private http: HttpClient) {}

  public fetchCountryData(country: Country): Observable<any> {
    return this.http.get(country.file);
  }

  public parseCountryData(countryData: any): Observable<any> {
    return new Observable((observer) => {
      const barGraphData: Array<BarGraphData> = countryData.data.map(
        (dataItem) => ({
          date: dataItem.date,
          totalCases: dataItem.total_cases,
        })
      );
      const cardData = {
        population: countryData.population,
        populationDensity: countryData.population_density,
        medianAge: countryData.median_age,
        ageGroup65: countryData.aged_65_older,
        ageGroup70: countryData.aged_70_older,
        lifeExpectancy: countryData.life_expectancy,
        maleSmokers: countryData.male_smokers,
        femaleSmokers: countryData.female_smokers,
      };
      const generalData = {
        location: countryData.location,
        continent: countryData.continent,
      };
      observer.next({
        barGraphData,
        cardData,
        generalData,
      });
    });
  }
}
