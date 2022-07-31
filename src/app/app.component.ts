import { Component } from '@angular/core';
import { NavigationService } from './core/services/Navigation/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Examen Angular';

  constructor(public navigation: NavigationService) {
    this.navigation.startSaveHistory();
  }
}
