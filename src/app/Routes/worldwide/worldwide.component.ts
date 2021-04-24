import { Component, OnInit } from '@angular/core';
import { UIRoutes } from 'src/app/Constants/uiroutes';
import { BarGraphData } from 'src/app/Interfaces/bar-graph-data';
import { CountryCardsData } from 'src/app/Interfaces/country';
import { WorldWideService } from 'src/app/Services/world-wide.service';

@Component({
  selector: 'app-worldwide',
  templateUrl: './worldwide.component.html',
  styleUrls: ['./worldwide.component.scss'],
})
export class WorldwideComponent implements OnInit {
  public avatarInfo: { title: string; icon: string; subTitle: string } = {
    title: 'World Wide',
    icon: 'assets/world-icon.png',
    subTitle: 'Global Covid-19 Infomation',
  };
  public previousPage: { path: string; label: string } = {
    path: `/${UIRoutes.COUNTRIES}`,
    label: 'Previous : Top Affected Countries',
  };
  public generalData: CountryCardsData;
  public newCasesData: Array<{ date: Date; value: number }>;
  public newDeathsData: Array<{ date: Date; value: number }>;
  public totalCasesData: Array<{ date: string; totalCases: number }>;

  constructor(private dataService: WorldWideService) {}

  ngOnInit(): void {
    this.dataService.fetchWorldData().subscribe((data) => {
      this.dataService
        .parseWorldData(data)
        .subscribe(
          (parsedData: {
            totalCasesGraphData: Array<BarGraphData>;
            newCasesGraphData: Array<{ date: Date; value: number }>;
            newDeathsGraphData: Array<{ date: Date; value: number }>;
            generalData: CountryCardsData;
          }) => {
            this.generalData = parsedData.generalData;
            this.newCasesData = parsedData.newCasesGraphData;
            this.newDeathsData = parsedData.newDeathsGraphData;
            this.totalCasesData = parsedData.totalCasesGraphData;
          }
        );
    });
  }
}
