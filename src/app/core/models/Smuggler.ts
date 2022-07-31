import IPlanet from '../interfaces/Planet';
import ISmuggler from '../interfaces/Smuggler';
import ISpaceship from '../interfaces/Spaceship';

export default class Smuggler implements ISmuggler {
  id: number;
  name: string;
  species: string;
  gender: string;
  height: number;
  mass: number;
  image: string;
  spaceshipName: string;
  planetName: string;

  constructor(values: ISmuggler) {
    this.id = values.id;
    this.name = values.name;
    this.species = values.species;
    this.gender = values.gender;
    this.height = values.height;
    this.mass = values.mass;
    this.image = values.image;
    this.spaceshipName = values.spaceshipName;
    this.planetName = values.planetName;
  }
}
