import IPlanet from './Planet';
import ISpaceship from './Spaceship';

export default interface ISmuggler {
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
}
