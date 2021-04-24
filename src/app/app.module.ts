import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Routes/home/home.component';
import { WorldwideComponent } from './Routes/worldwide/worldwide.component';
import { CountryComponent } from './Routes/country/country.component';
import { HistoryComponent } from './Routes/history/history.component';
import { AvatarComponent } from './Components/avatar/avatar.component';
import { NavMenuComponent } from './Components/nav-menu/nav-menu.component';
import { OptionListComponent } from './Components/option-list/option-list.component';
import { BarGraphComponent } from './Components/bar-graph/bar-graph.component';
import { LineGraphComponent } from './Components/line-graph/line-graph.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorldwideComponent,
    CountryComponent,
    HistoryComponent,
    AvatarComponent,
    NavMenuComponent,
    OptionListComponent,
    BarGraphComponent,
    LineGraphComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
