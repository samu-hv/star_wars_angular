import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { MainService } from 'src/app/core/services/main.service';
import { NavigationService } from 'src/app/core/services/Navigation/navigation.service';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-smuggler-details',
  templateUrl: './smuggler-details.component.html',
  styleUrls: ['./smuggler-details.component.scss']
})
export class SmugglerDetailsComponent implements OnInit {
  smuggler!: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private mainService: MainService,
    public navigation: NavigationService,
    private router: Router,
    private breadcrumbService: BreadcrumbService
  ) {}

  ngOnInit(): void {
    this.getSmuggler();
    this.breadcrumbService.set('@Smuggler Details', 'Smuggler Details');
    console.log(`${this.smuggler.id}/${this.smuggler.name}`);
    console.log(this.smuggler.name.replace(/ /g, '%20'));
  }

  getSmuggler() {
    this.activatedRoute.paramMap.subscribe((params) => {
      const smugglerParams: any = params;

      this.smuggler = this.mainService.findSmugglerByID(
        smugglerParams.params.id
      );
    });
  }

  translateSpecie(dataSpecie: string): string {
    let specie: string = '';
    if (dataSpecie == 'Human') {
      specie = 'smugglerDetail.human';
    } else {
      return 'Wookiee';
    }
    return specie;
  }

  translateGender(dataGender: string): string {
    let gender: string = '';
    if (dataGender == 'Male') {
      gender = 'smugglerDetail.male';
    } else {
      return 'Female';
    }
    return gender;
  }

  translateResume(character: string): string {
    let resume: string = '';
    if (character == 'Han Solo') {
      resume = 'smugglerDetail.resume.hanSolo';
    } else if (character == 'Chewbacca') {
      resume = 'smugglerDetail.resume.chewbacca';
    } else {
      return 'smugglerDetail.resume.lando';
    }
    return resume;
  }

  checkRouteUrl() {
    const name = this.smuggler.name.replace(/ /g, '%20');
    return this.router.url == `/${this.smuggler.id}/${name}`;
  }
}
