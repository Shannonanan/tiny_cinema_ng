import { Component, OnInit, Input } from "@angular/core";
export interface MovieCard {
  title: string;
  imageSrc: string;
  description: string;
}
@Component({
  selector: "app-movie-card",
  templateUrl: "./movie-card.component.html",
  styleUrls: ["./movie-card.component.css"]
})
export class MovieCardComponent implements OnInit {
  @Input() movieCards: MovieCard[] = [];
  movies: any[] = [];

  constructor() {}

  ngOnInit() {
    this.movies = this.movieCards;
  }
}
