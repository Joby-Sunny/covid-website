import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Data } from 'src/app/Constants/data';
import { BarGraphData } from '../Interfaces/bar-graph-data';

@Injectable({
  providedIn: 'root',
})
export class WorldWideService {
  worldData = Data.WORLD_DATA;

  constructor(private http: HttpClient) {}

  public fetchWorldData(): Observable<any> {
    return this.http.get(this.worldData.file);
  }

  public parseWorldData(worldData: any): Observable<any> {
    return new Observable((observer) => {
      const totalCasesGraphData: Array<BarGraphData> = worldData.data.map(
        (dataItem) => ({
          date: dataItem.date,
          totalCases: dataItem.total_cases,
        })
      );
      const newCasesGraphData: Array<{
        date: Date;
        value: number;
      }> = worldData.data.map((dataItem) => ({
        date: new Date(dataItem.date),
        value: dataItem.new_cases,
      }));
      const newDeathsGraphData: Array<{
        date: Date;
        value: number;
      }> = worldData.data.map((dataItem) => ({
        date: new Date(dataItem.date),
        value: dataItem.new_deaths,
      }));
      const generalData = {
        population: worldData.population,
        populationDensity: worldData.population_density,
        medianAge: worldData.median_age,
        ageGroup65: worldData.aged_65_older,
        ageGroup70: worldData.aged_70_older,
        lifeExpectancy: worldData.life_expectancy,
        maleSmokers: worldData.male_smokers,
        femaleSmokers: worldData.female_smokers,
      };
      observer.next({
        totalCasesGraphData,
        newCasesGraphData,
        newDeathsGraphData,
        generalData,
      });
    });
  }
}
