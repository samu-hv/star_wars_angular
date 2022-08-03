import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { BreadcrumbService } from 'xng-breadcrumb';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Components
import { AppComponent } from './app.component';
import { PlanetComponent } from './components/planet/planet.component';
import { SmugglerComponent } from './components/smuggler/smuggler.component';
import { SmugglerDetailsComponent } from './components/smugglerDetails/smuggler-details.component';
import { SpaceshipComponent } from './components/spaceship/spaceship.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { CreateSmugglerComponent } from './components/forms/smuggler/create-smuggler.component';

// Nngx-translate and the http loader
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

// Pipes
import { FormatUrlPipe } from './core/pipe/format-url.pipe';

//Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CreatePlanetComponent } from './components/forms/planet/create-planet.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanetComponent,
    SmugglerComponent,
    SmugglerDetailsComponent,
    SpaceshipComponent,
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    FormatUrlPipe,
    CreateSmugglerComponent,
    CreatePlanetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    MatButtonModule,
    BreadcrumbModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  providers: [BreadcrumbService],
  bootstrap: [AppComponent]
})
export class AppModule {}

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
