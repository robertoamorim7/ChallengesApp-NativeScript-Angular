import { Component, OnInit } from "@angular/core";
import { isAndroid, Page } from "@nativescript/core";

@Component({
  selector: "ns-today",
  templateUrl: "./today.component.html",
  styleUrls: ["./today.component.scss"],
})
export class TodayComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  onActionSelect(action: string) {
    console.log(action);
  }
}
