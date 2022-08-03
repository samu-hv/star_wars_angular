import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiConnService } from 'src/app/core/services/ApiConnection/api-conn.service';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-create-planet',
  templateUrl: './create-planet.component.html',
  styleUrls: ['./create-planet.component.scss']
})
export class CreatePlanetComponent implements OnInit {
  planetGroup!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private breadcrumbService: BreadcrumbService,
    private apiService: ApiConnService
  ) {
    this.planetGroup = this.fb.group({
      name: ['', Validators.required],
      region: ['', Validators.required],
      sector: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.breadcrumbService.set('@Form Planet', 'Form Planet');
  }

  postPlanet(planetData: FormData) {
    this.apiService.postPlanets(planetData).subscribe((planet) => planet);
  }

  submitForm() {
    const planet = this.planetGroup.value;
    this.postPlanet(planet);
  }
}
