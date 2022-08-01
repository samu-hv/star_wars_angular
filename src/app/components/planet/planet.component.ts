import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Planet from 'src/app/core/models/Planet';
import { NavigationService } from 'src/app/core/services/Navigation/navigation.service';
import { ApiConnService } from 'src/app/core/services/ApiConnection/api-conn.service';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss']
})
export class PlanetComponent implements OnInit {
  planet!: Planet;

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiConnService,
    public navigation: NavigationService,
    private breadcrumbService: BreadcrumbService
  ) {}

  ngOnInit(): void {
    this.getPlanet();
    this.breadcrumbService.set('@Planet', 'Planet');
  }

  getPlanet() {
    this.activatedRoute.paramMap.subscribe((params) => {
      const planetParams: any = params;
      console.log(params);
      this.apiService
        .getPlanetById(planetParams.params.id)
        .subscribe((planetDetails: Planet) => {
          this.planet = planetDetails;
        });
    });
  }
}
