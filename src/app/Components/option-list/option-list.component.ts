import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-option-list',
  templateUrl: './option-list.component.html',
  styleUrls: ['./option-list.component.scss'],
})
export class OptionListComponent implements OnInit {
  @Input() optionList: Array<{
    name: string;
    code: string;
    icon: string;
    active: boolean;
  }> = [];
  
  @Output() onClick = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onOptionClick(option: any): void {
    this.onClick.emit(option);
  }

  trackByFn(index: number): number {
    return index;
  }
}
