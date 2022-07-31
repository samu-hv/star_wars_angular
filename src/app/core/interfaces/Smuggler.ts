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
  spaceshipName: string;
  planetName: string;
}
