import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.css"]
})
export class ToolbarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  onBackPressed() {
    console.log("back pressed");
  }

  InTheatresClicked() {
    console.log("Movies in theatres");
  }
}
