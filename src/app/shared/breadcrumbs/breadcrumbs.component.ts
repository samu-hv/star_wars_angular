import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/core/services/Navigation/navigation.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {
  links?: string[];

  constructor(private navigationService: NavigationService) {}

  ngOnInit(): void {
    this.links = this.navigationService.getHistory();
  }
}
