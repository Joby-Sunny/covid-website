import { Component, OnInit } from '@angular/core';
import { UIRoutes } from 'src/app/Constants/uiroutes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  nextPage: UIRoutes = UIRoutes.HISTORY;
  constructor() {}

  ngOnInit(): void {}
}
