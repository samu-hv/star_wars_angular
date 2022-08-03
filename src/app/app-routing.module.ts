import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePlanetComponent } from './components/forms/planet/create-planet.component';
import { CreateSmugglerComponent } from './components/forms/smuggler/create-smuggler.component';
import { CreateSpaceshipComponent } from './components/forms/spaceship/create-spaceship.component';
import { PlanetComponent } from './components/planet/planet.component';
import { SmugglerComponent } from './components/smuggler/smuggler.component';
import { SmugglerDetailsComponent } from './components/smugglerDetails/smuggler-details.component';

import { SpaceshipComponent } from './components/spaceship/spaceship.component';

const routes: Routes = [
  {
    path: '',
    component: SmugglerComponent,
    data: { breadcrumb: 'Smuggler' }
  },
  {
    path: ':id/:name',
    component: SmugglerDetailsComponent,
    data: { breadcrumb: { alias: 'Smuggler Details' } },
    children: [
      {
        path: ':id/:planetName',
        component: PlanetComponent,
        data: { breadcrumb: { alias: 'Planet' } }
      },
      {
        path: 'spaceship/:id/:spaceshipName',
        component: SpaceshipComponent,
        data: { breadcrumb: 'Spaceship' }
      }
    ]
  },
  {
    path: 'create-smuggler',
    component: CreateSmugglerComponent,
    data: { breadcrumb: { alias: 'Form Smuggler' } }
  },
  {
    path: 'create-planet',
    component: CreatePlanetComponent,
    data: { breadcrumb: { alias: 'Form Planet' } }
  },
  {
    path: 'create-spaceship',
    component: CreateSpaceshipComponent,
    data: { breadcrumb: { alias: 'Form Spaceship' } }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
