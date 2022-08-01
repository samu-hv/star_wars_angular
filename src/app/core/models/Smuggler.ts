import ISmuggler from '../interfaces/Smuggler';

export default class Smuggler implements ISmuggler {
  id: number;
  name: string;
  species: string;
  gender: string;
  height: number;
  mass: number;
  image: string;
  spaceship: [
    {
      id: number;
      name: string;
    }
  ];
  planet: {
    id: number;
    name: string;
  };
  biography: {
    en: string;
    es: string;
  };
  // data: ISmuggler;

  constructor(values: ISmuggler) {
    this.id = values.id;
    this.name = values.name;
    this.species = values.species;
    this.gender = values.gender;
    this.height = values.height;
    this.mass = values.mass;
    this.image = values.image;
    this.spaceship = values.spaceship;
    this.planet = values.planet;
    this.biography = values.biography;
    // this.data = values;
  }
}
