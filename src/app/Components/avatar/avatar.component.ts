import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent implements OnInit {
  @Input() avatar: string = './assets/history-icon.webp';
  @Input() title: string = 'Title';
  @Input() subTitle: string = 'Simple title description';

  constructor() {}

  ngOnInit(): void {}
}
