import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UIRoutes } from './Constants/uiroutes';
import { CountryComponent } from './Routes/country/country.component';
import { HistoryComponent } from './Routes/history/history.component';
import { HomeComponent } from './Routes/home/home.component';
import { WorldwideComponent } from './Routes/worldwide/worldwide.component';

const routes: Routes = [
  { path: UIRoutes.HISTORY, component: HistoryComponent },
  { path: UIRoutes.COUNTRIES, component: CountryComponent },
  { path: UIRoutes.WORLD, component: WorldwideComponent },
  { path: UIRoutes.HOME, component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
