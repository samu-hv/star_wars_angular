import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Spaceship from 'src/app/core/models/Spaceship';
import { NavigationService } from 'src/app/core/services/Navigation/navigation.service';
import { ApiConnService } from 'src/app/core/services/ApiConnection/api-conn.service';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-spaceship',
  templateUrl: './spaceship.component.html',
  styleUrls: ['./spaceship.component.scss']
})
export class SpaceshipComponent implements OnInit {
  spaceship!: Spaceship;

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiConnService,
    private breadcrumbService: BreadcrumbService,
    public navigation: NavigationService
  ) {}
  ngOnInit(): void {
    this.getSpaceship();
    this.breadcrumbService.set('@Spaceship', 'Spaceship');
  }

  getSpaceship() {
    this.activatedRoute.paramMap.subscribe((params) => {
      const spaceshipParams: any = params;
      this.apiService
        .getSpaceshipById(spaceshipParams.params.id)
        .subscribe((spaceshipDetails: Spaceship) => {
          this.spaceship = spaceshipDetails;
        });
    });
  }
}
