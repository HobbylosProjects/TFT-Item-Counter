import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { items } from '../display-items/items';

@Component({
  selector: 'app-display-item',
  templateUrl: './display-item.component.html',
  styleUrls: ['./display-item.component.scss'],
})
export class DisplayItemComponent implements OnInit {
  constructor() {}
  inputvalue: number = 0;
  @Input() item = { path: '', name: '', items: [] };
  @Output() itemsAdd = new EventEmitter<any>();
  @Output() itemsDelete = new EventEmitter<any>();
  ngOnInit(): void {}

  increaseCounter() {
    this.inputvalue++;
    this.itemsAdd.emit(this.item.items);
  }
  decreaseCounter() {
    if (this.inputvalue > 0) {
      this.inputvalue--;
      this.itemsDelete.emit(this.item.items);
    }
  }
}
