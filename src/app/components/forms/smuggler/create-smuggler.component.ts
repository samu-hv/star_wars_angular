import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Planet from 'src/app/core/models/Planet';
import Smuggler from 'src/app/core/models/Smuggler';
import Spaceship from 'src/app/core/models/Spaceship';
import { ApiConnService } from 'src/app/core/services/ApiConnection/api-conn.service';
import { BreadcrumbService } from 'xng-breadcrumb';
@Component({
  selector: 'app-create-smuggler',
  templateUrl: './create-smuggler.component.html',
  styleUrls: ['./create-smuggler.component.scss']
})
export class CreateSmugglerComponent implements OnInit {
  smugglerGroup!: FormGroup;
  planets!: Array<Planet>;
  spaceships?: Array<Spaceship>;
  planetGroup?: any;
  spaceshipGroup!: any;
  testingParent!: any;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private breadcrumbService: BreadcrumbService,
    private apiService: ApiConnService
  ) {
    this.smugglerGroup = this.fb.group({
      name: ['', Validators.required],
      species: ['', Validators.required],
      gender: ['', Validators.required],
      height: ['', Validators.required],
      mass: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.apiService.getPlanets().subscribe((planet) => {
      this.planets = planet;
    });
    this.apiService.getSpaceships().subscribe((spaceship) => {
      this.spaceships = spaceship;
    });
    this.breadcrumbService.set('@Form Smuggler', 'Form Smuggler');
  }

  createPlanetGroup(planet: Planet) {
    this.planetGroup = { planet: { id: planet.id, name: planet.name } };
  }

  createSpaceshipGroup(spaceship: Planet) {
    this.spaceshipGroup = {
      spaceship: { id: spaceship.id, name: spaceship.name }
    };
  }

  postSmuggler(smugglerData: FormData) {
    this.apiService
      .postSmugglers(smugglerData)
      .subscribe((smuggler) => smuggler);
  }

  submitForm() {
    const smuggler = this.smugglerGroup.value;
    const planet = this.planetGroup;
    const spaceship = this.spaceshipGroup;
    const smugglerMerged = { ...smuggler, ...planet, ...spaceship };
    this.postSmuggler(smugglerMerged);
  }

  navigateToEditor() {
    this.router.navigateByUrl('create-planet');
  }
}
