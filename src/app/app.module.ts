import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MostPopularMoviesComponent } from "./most-popular-movies/most-popular-movies.component";
import { MovieCardComponent } from "./components/movie-card/movie-card.component";
import { MovieListComponent } from "./components/movie-list/movie-list.component";
import { ToolbarComponent } from "./components/toolbar/toolbar.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";

@NgModule({
  declarations: [
    AppComponent,
    MostPopularMoviesComponent,
    MovieCardComponent,
    MovieListComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
