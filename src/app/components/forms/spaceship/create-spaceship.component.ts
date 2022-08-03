import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiConnService } from 'src/app/core/services/ApiConnection/api-conn.service';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-create-spaceship',
  templateUrl: './create-spaceship.component.html',
  styleUrls: ['./create-spaceship.component.scss']
})
export class CreateSpaceshipComponent implements OnInit {
  spaceshipGroup!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private breadcrumbService: BreadcrumbService,
    private apiService: ApiConnService
  ) {
    this.spaceshipGroup = this.fb.group({
      name: ['', Validators.required],
      manufacturer: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.breadcrumbService.set('@Form Spaceship', 'Form Spaceship');
  }

  postSpaceship(spaceshipData: FormData) {
    this.apiService
      .postSpaceships(spaceshipData)
      .subscribe((spaceship) => spaceship);
  }

  submitForm() {
    const spaceship = this.spaceshipGroup.value;
    this.postSpaceship(spaceship);
  }
}
