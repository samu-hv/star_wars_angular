import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { BreadcrumbService } from 'xng-breadcrumb';

//Components
import { AppComponent } from './app.component';
import { PlanetComponent } from './components/planet/planet.component';
import { SmugglerComponent } from './components/smuggler/smuggler.component';
import { SmugglerDetailsComponent } from './components/smugglerDetails/smuggler-details.component';
import { SpaceshipComponent } from './components/spaceship/spaceship.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

// Nngx-translate and the http loader
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

//Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { FormatUrlPipe } from './core/pipe/format-url.pipe';
import { CreateFormSmugglerComponent } from './components/createForm/create-form-smuggler.component';

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
    CreateFormSmugglerComponent
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
    BreadcrumbModule
  ],
  providers: [BreadcrumbService],
  bootstrap: [AppComponent]
})
export class AppModule {}

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
