import IPlanet from '../interfaces/Planet';

export default class Planet implements IPlanet {
  id: number;
  name: string;
  region: string;
  sector: string;
  image: string;

  constructor(values: IPlanet) {
    this.id = values.id;
    this.name = values.name;
    this.region = values.region;
    this.sector = values.sector;
    this.image = values.image;
  }
}
