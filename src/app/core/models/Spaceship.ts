import ISpaceship from '../interfaces/Spaceship';

export default class Spaceship {
  id: number;
  name: string;
  manufacturer: string;
  image: string;

  constructor(values: ISpaceship) {
    this.id = values.id;
    this.name = values.name;
    this.manufacturer = values.manufacturer;
    this.image = values.image;
  }
}
