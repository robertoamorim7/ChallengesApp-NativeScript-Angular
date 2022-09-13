import { Page } from "@nativescript/core";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "@nativescript/angular";

@Component({
  selector: "ns-challenge-tabs",
  templateUrl: "./challenge-tabs.component.html",
  styleUrls: [
    "./challenge-tabs.component.common.css",
    "./challenge-tabs.component.css",
  ],
})
export class ChallengeTabsComponent implements OnInit {
  constructor(
    private router: RouterExtensions,
    private active: ActivatedRoute,
    private page: Page
  ) {}

  ngOnInit() {
    this.router.navigate(
      [{ outlets: { current: ["current-challenge"], today: ["today"] } }],
      { relativeTo: this.active }
    );
    this.page.actionBarHidden = true;
  }
}
