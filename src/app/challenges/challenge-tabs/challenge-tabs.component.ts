import { Page } from "@nativescript/core";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "@nativescript/angular";
import { ChallengeService } from "../challenge.service";

@Component({
  selector: "ns-challenge-tabs",
  templateUrl: "./challenge-tabs.component.html",
  styleUrls: [
    "./challenge-tabs.component.common.css",
    "./challenge-tabs.component.css",
  ],
})
export class ChallengeTabsComponent implements OnInit {
  isLoading = false;

  constructor(
    private router: RouterExtensions,
    private active: ActivatedRoute,
    private page: Page,
    private challengeService: ChallengeService
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.challengeService.fetchCurrentChallenge().subscribe(
      (res) => {
        this.isLoading = false;
        this.loadTabRoutes();
      },
      (err) => {
        this.isLoading = false;
      }
    );
    this.page.actionBarHidden = true;
  }

  private loadTabRoutes() {
    setTimeout(() => {
      this.router.navigate(
        [{ outlets: { current: ["current-challenge"], today: ["today"] } }],
        { relativeTo: this.active }
      );
    }, 10);
  }
}
