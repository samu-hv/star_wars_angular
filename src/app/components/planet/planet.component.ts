import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from 'src/app/core/services/main.service';
import { NavigationService } from 'src/app/core/services/Navigation/navigation.service';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss']
})
export class PlanetComponent implements OnInit {
  planet!: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private mainService: MainService,
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
      this.planet = this.mainService.findPlanetByID(
        planetParams.params.planetName
      );
    });
  }
}
