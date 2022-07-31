import { Injectable } from '@angular/core';
import Planet from '../models/Planet';
import Smuggler from '../models/Smuggler';
import Spaceship from '../models/Spaceship';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  smugglers: Array<Smuggler> = [
    {
      id: 1,
      name: 'Han Solo',
      species: 'Human',
      gender: 'Male',
      height: 1.8,
      mass: 80,
      image: '../../../assets/images/hansolo.png',
      spaceshipName: 'Millennium Falcon',
      planetName: 'Corellia'
    },
    {
      id: 2,
      name: 'Chewbacca',
      species: 'Wookiee',
      gender: 'Male',
      height: 2.3,
      mass: 112,
      image: '../../../assets/images/chewbacca.png',
      spaceshipName: 'Eravana',
      planetName: 'Kashyyyk'
    },
    {
      id: 3,
      name: 'Lando Calrissian',
      species: 'Human',
      gender: 'Male',
      height: 1.78,
      mass: 79,
      image: '../../../assets/images/lando.png',
      spaceshipName: 'Millennium Falcon',
      planetName: 'Socorro'
    }
  ];

  planets: Array<Planet> = [
    {
      id: 1,
      name: 'Corellia',
      region: 'Core Worlds',
      sector: 'Corellian sector',
      image: '../../../assets/images/corellia.png'
    },
    {
      id: 2,
      name: 'Kashyyyk',
      region: 'Mid Rim Territories',
      sector: 'Mytaranor sector',
      image: '../../../assets/images/kashyyyk.png'
    },
    {
      id: 3,
      name: 'Socorro',
      region: 'Core Worlds',
      sector: 'Corellian sector',
      image: '../../../assets/images/socorro.jpg'
    }
  ];

  spaceships: Array<Spaceship> = [
    {
      id: 1,
      name: 'Millennium Falcon',
      manufacturer: 'Corellian Engineering Corporation',
      image: '../../../assets/images/millennium.png'
    },
    {
      id: 2,
      name: 'Eravana',
      manufacturer: 'Corellian Engineering Corporation',
      image: '../../../assets/images/eravana.png'
    }
  ];

  constructor() {}

  public findSmugglerByID(id: number): Smuggler | undefined {
    return this.smugglers.find((smuggler) => smuggler.id == id);
  }

  public findPlanetByID(name: string): Planet | undefined {
    return this.planets.find((planet) => planet.name == name);
  }

  public findSpaceshipByID(name: string): Spaceship | undefined {
    return this.spaceships.find((spaceship) => spaceship.name == name);
  }
}
