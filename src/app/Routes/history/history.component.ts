import { Component, OnInit } from '@angular/core';
import { UIRoutes } from 'src/app/Constants/uiroutes';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  title: string = 'Covid Pandemic';
  subTitle: string = 'How, what and when';
  icon: string = './assets/history-icon.webp';

  nextPageLink: string = `/${UIRoutes.COUNTRIES}`;
  nextPageTitle: string = 'Top Affected Countries';

  constructor() {}

  ngOnInit(): void {}
}
