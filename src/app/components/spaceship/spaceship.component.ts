import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from 'src/app/core/services/main.service';
import { NavigationService } from 'src/app/core/services/Navigation/navigation.service';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-spaceship',
  templateUrl: './spaceship.component.html',
  styleUrls: ['./spaceship.component.scss']
})
export class SpaceshipComponent implements OnInit {
  spaceship!: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private mainService: MainService,
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
      this.spaceship = this.mainService.findSpaceshipByID(
        spaceshipParams.params.spaceshipName
      );
    });
  }
}
