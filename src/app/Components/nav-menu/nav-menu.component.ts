import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
})
export class NavMenuComponent implements OnInit {
  @Input() pageLink: string;
  @Input() pageTitle: string;

  constructor() {}

  ngOnInit(): void {}
}
