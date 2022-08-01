import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Smuggler from 'src/app/core/models/Smuggler';
import { NavigationService } from 'src/app/core/services/Navigation/navigation.service';
import { ApiConnService } from 'src/app/core/services/ApiConnection/api-conn.service';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-smuggler-details',
  templateUrl: './smuggler-details.component.html',
  styleUrls: ['./smuggler-details.component.scss']
})
export class SmugglerDetailsComponent implements OnInit {
  smuggler!: Smuggler;

  constructor(
    private activatedRoute: ActivatedRoute,
    public navigation: NavigationService,
    private router: Router,
    private breadcrumbService: BreadcrumbService,
    private apiService: ApiConnService,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.getSmuggler();
    console.log(this.smuggler);
    this.breadcrumbService.set('@Smuggler Details', 'Smuggler Details');
  }

  getSmuggler() {
    this.activatedRoute.paramMap.subscribe((params) => {
      const smugglerParams: any = params;
      this.apiService
        .getSmugglerById(smugglerParams.params.id)
        .subscribe((smugglerDetails: Smuggler) => {
          this.smuggler = smugglerDetails;
        });
    });
  }

  translateSpecie(dataSpecie: string): string {
    return dataSpecie === 'Human' ? 'smugglerDetail.human' : 'Wookiee';
  }

  translateGender(dataGender: string): string {
    return dataGender === 'Male' ? 'smugglerDetail.male' : 'Female';
  }

  translateResume() {
    return this.translate.currentLang === 'en'
      ? this.smuggler.biography.en
      : this.smuggler.biography.es;
  }

  checkRouteUrl() {
    const name = this.smuggler.name.replace(/ /g, '-').toLowerCase();
    return this.router.url == `/${this.smuggler.id}/${name}`;
  }
}
