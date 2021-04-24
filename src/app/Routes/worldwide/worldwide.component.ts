import { Component, OnInit } from '@angular/core';
import { UIRoutes } from 'src/app/Constants/uiroutes';

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

  constructor() {}

  ngOnInit(): void {}
}
