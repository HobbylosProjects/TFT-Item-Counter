import { Component, OnInit } from '@angular/core';
import { Item } from './item';
import { items } from './items';

@Component({
  selector: 'app-display-items',
  templateUrl: './display-items.component.html',
  styleUrls: ['./display-items.component.scss'],
})
export class DisplayItemsComponent implements OnInit {
  constructor() {}
  listOfBasicItems: any = [
    { name: 'Spatula', path: './assets/Spatula.png' },
    { name: 'GiantsBelt', path: './assets/GiantsBelt.png' },
    { name: 'RecurveBow', path: './assets/RecurveBow.png' },
    { name: 'SparringGloves', path: './assets/SparringGloves.png' },
    { name: 'NeedlesslyLargeRod', path: './assets/NeedlesslyLargeRod.png' },
    { name: 'TearOfTheGoddess', path: './assets/TearoftheGoddess.png' },
    { name: 'NegatronCloak', path: './assets/NegatronCloak.png' },
    { name: 'BFSword', path: './assets/BFSword.png' },
    { name: 'ChainVest', path: './assets/ChainVest.png' },
  ];
  items: any = items;
  basicItems: any = [
    'Spatula',
    'GiantsBelt',
    'RecurveBow',
    'SparringGloves',
    'NeedlesslyLargeRod',
    'ChainVest',
    'TearOfTheGoddess',
    'NegatronCloak',
    'BFSword',
  ];
  tableObject: any = [];
  itemList: string[] = [];
  ngOnInit(): void {}
  addItems(value: string[]): void {
    this.itemList.push(value[0]);
    this.itemList.push(value[1]);
    this.buildTable();
  }
  deleteItems(value: string[]): void {
    const firstItem = this.itemList.indexOf(value[0]);
    this.itemList.splice(firstItem, 1);
    const secondItem = this.itemList.indexOf(value[1]);
    this.itemList.splice(secondItem, 1);
    this.buildTable();
  }
  buildTable() {
    this.tableObject = [];
    for (let item of this.basicItems) {
      const filteredArray = this.itemList.filter((value) => value === item);
      if (filteredArray.length > 0) {
        const currentObject = {
          item: item,
          amount: filteredArray.length,
          path: '',
        };
        if (item === 'Spatula') {
          currentObject.path = './assets/Spatula.png';
        }
        if (item === 'GiantsBelt') {
          currentObject.path = './assets/GiantsBelt.png';
        }
        if (item === 'RecurveBow') {
          currentObject.path = './assets/RecurveBow.png';
        }
        if (item === 'SparringGloves') {
          currentObject.path = './assets/SparringGloves.png';
        }
        if (item === 'NeedlesslyLargeRod') {
          currentObject.path = './assets/NeedlesslyLargeRod.png';
        }
        if (item === 'ChainVest') {
          currentObject.path = './assets/ChainVest.png';
        }
        if (item === 'TearOfTheGoddess') {
          currentObject.path = './assets/TearoftheGoddess.png';
        }
        if (item === 'NegatronCloak') {
          currentObject.path = './assets/NegatronCloak.png';
        }
        if (item === 'BFSword') {
          currentObject.path = './assets/BFSword.png';
        }
        this.tableObject.push(currentObject);
      }
    }
  }
  addBasicItem(item: any) {
    console.log(item);
    this.itemList.push(item);
    this.buildTable();
  }
  deleteBasicItem(item: any) {
    const firstItem = this.itemList.indexOf(item);
    this.itemList.splice(firstItem, 1);
    this.buildTable();
  }
}
