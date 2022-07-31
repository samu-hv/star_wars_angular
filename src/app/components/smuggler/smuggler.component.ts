import { Component, OnInit } from '@angular/core';
import Smuggler from 'src/app/core/models/Smuggler';
import { MainService } from 'src/app/core/services/main.service';
import { StarWarsService } from 'src/app/core/services/StarWars/star-wars.service';

@Component({
  selector: 'app-smuggler',
  templateUrl: './smuggler.component.html',
  styleUrls: ['./smuggler.component.scss']
})
export class SmugglerComponent implements OnInit {
  smugglers: Array<Smuggler> = this.mainService.smugglers;

  constructor(private mainService: MainService) {}

  ngOnInit(): void {}
}
