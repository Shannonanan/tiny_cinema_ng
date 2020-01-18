import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-movie-card",
  templateUrl: "./movie-card.component.html",
  styleUrls: ["./movie-card.component.css"]
})
export class MovieCardComponent implements OnInit {
  images: any[] = [
    "https://s3-us-west-1.amazonaws.com/tachyonsio/img/primer.jpg",
    "https://s3-us-west-1.amazonaws.com/tachyonsio/img/primer.jpg",
    "https://s3-us-west-1.amazonaws.com/tachyonsio/img/primer.jpg",
    "https://s3-us-west-1.amazonaws.com/tachyonsio/img/primer.jpg",
    "https://s3-us-west-1.amazonaws.com/tachyonsio/img/primer.jpg",
    "https://s3-us-west-1.amazonaws.com/tachyonsio/img/primer.jpg",
    "https://s3-us-west-1.amazonaws.com/tachyonsio/img/primer.jpg",
    "https://s3-us-west-1.amazonaws.com/tachyonsio/img/primer.jpg",
    "https://s3-us-west-1.amazonaws.com/tachyonsio/img/primer.jpg"
  ];

  // image = "https://s3-us-west-1.amazonaws.com/tachyonsio/img/primer.jpg";

  constructor() {}

  ngOnInit() {}
}
