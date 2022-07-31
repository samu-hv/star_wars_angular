import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
        path: 'planet/:planetName',
        component: PlanetComponent,
        data: { breadcrumb: { alias: 'Planet' } }
      },
      {
        path: 'spaceship/:spaceshipName',
        component: SpaceshipComponent,
        data: { breadcrumb: 'Spaceship' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
