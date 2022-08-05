import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import Planet from 'src/app/core/models/Planet';
import Spaceship from 'src/app/core/models/Spaceship';
import { ApiConnService } from 'src/app/core/services/ApiConnection/api-conn.service';

@Component({
  selector: 'app-form-smuggler-selects',
  templateUrl: './form-smuggler-selects.component.html',
  styleUrls: ['./form-smuggler-selects.component.scss']
})
export class FormSmugglerSelectsComponent implements OnInit {
  planets!: Array<Planet>;
  spaceships?: Array<Spaceship>;
  @Output() newPlanetEvent = new EventEmitter<any>();
  @Output() newSpaceshipEvent = new EventEmitter<any>();

  createPlanet(value: any) {
    this.newPlanetEvent.emit({ planet: { id: value.id, name: value.name } });
    console.log(this.newPlanetEvent);
  }

  createSpaceship(value: any) {
    this.newSpaceshipEvent.emit({
      spaceship: { id: value.id, name: value.name }
    });
    console.log(this.newSpaceshipEvent);
  }

  constructor(private apiService: ApiConnService) {}

  ngOnInit(): void {
    this.apiService.getPlanets().subscribe((planet) => {
      this.planets = planet;
    });
    this.apiService.getSpaceships().subscribe((spaceship) => {
      this.spaceships = spaceship;
    });
  }
}
