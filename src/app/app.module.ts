import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { AppComponent } from './app.component';
import { DisplayItemComponent } from './display-item/display-item.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DisplayItemsComponent } from './display-items/display-items.component';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [AppComponent, DisplayItemComponent, DisplayItemsComponent],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
