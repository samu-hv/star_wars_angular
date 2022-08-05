import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiConnService } from 'src/app/core/services/ApiConnection/api-conn.service';
import { BreadcrumbService } from 'xng-breadcrumb';
@Component({
  selector: 'app-create-smuggler',
  templateUrl: './create-smuggler.component.html',
  styleUrls: ['./create-smuggler.component.scss']
})
export class CreateSmugglerComponent implements OnInit {
  smugglerGroup!: FormGroup;
  planet: any;
  spaceship: any;

  planetSelected(value: any) {
    this.planet = value;
    console.log(this.planet);
  }

  spaceshipSelected(value: any) {
    this.spaceship = value;
    console.log(this.spaceship);
  }

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
    this.breadcrumbService.set('@Form Smuggler', 'Form Smuggler');
  }

  postSmuggler(smugglerData: FormData) {
    this.apiService
      .postSmugglers(smugglerData)
      .subscribe((smuggler) => smuggler);
  }

  submitForm() {
    const smuggler = this.smugglerGroup.value;
    const planet = this.planet;
    const spaceship = this.spaceship;
    const smugglerMerged = { ...smuggler, ...planet, ...spaceship };
    this.postSmuggler(smugglerMerged);
  }

  navigateToEditor() {
    this.router.navigateByUrl('create-planet');
  }
}
