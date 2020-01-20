import { Component, OnInit } from "@angular/core";
import { MovieCard } from "../movie-card/movie-card.component";

@Component({
  selector: "app-movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.css"]
})
export class MovieListComponent implements OnInit {
  mockMovies: MovieCard[] = [];

  constructor() {
    this.mockMovies = [
      {
        title: "test",
        imageSrc:
          "https://s3-us-west-1.amazonaws.com/tachyonsio/img/primer.jpg",
        description: "test"
      },
      {
        title: "test",
        imageSrc:
          "https://s3-us-west-1.amazonaws.com/tachyonsio/img/primer.jpg",
        description: "test"
      },
      {
        title: "test",
        imageSrc:
          "https://s3-us-west-1.amazonaws.com/tachyonsio/img/primer.jpg",
        description: "test"
      },
      {
        title: "test",
        imageSrc:
          "https://s3-us-west-1.amazonaws.com/tachyonsio/img/primer.jpg",
        description: "test"
      },
      {
        title: "test",
        imageSrc:
          "https://s3-us-west-1.amazonaws.com/tachyonsio/img/primer.jpg",
        description: "test"
      }
    ];
  }

  ngOnInit() {}
}
