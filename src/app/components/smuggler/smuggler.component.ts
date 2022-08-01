import { Component, OnInit } from '@angular/core';
import Smuggler from 'src/app/core/models/Smuggler';
import { ApiConnService } from 'src/app/core/services/ApiConnection/api-conn.service';

@Component({
  selector: 'app-smuggler',
  templateUrl: './smuggler.component.html',
  styleUrls: ['./smuggler.component.scss']
})
export class SmugglerComponent implements OnInit {
  smugglers!: Array<Smuggler>;

  constructor(private apiService: ApiConnService) {}

  ngOnInit(): void {
    this.apiService.getSmugglers().subscribe((smuggler: any) => {
      this.smugglers = smuggler;
    });
  }
}
