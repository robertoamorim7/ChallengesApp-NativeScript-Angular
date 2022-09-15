import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PageRoute, RouterExtensions } from "@nativescript/angular";
import { ChallengeService } from "../challenge.service";

@Component({
  selector: "ns-challenge-edit",
  templateUrl: "./challenge-edit.component.html",
  styleUrls: ["./challenge-edit.component.scss"],
})
export class ChallengeEditComponent implements OnInit {
  isCreating = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pageRoute: PageRoute,
    private router: RouterExtensions,
    private challengeService: ChallengeService
  ) {}

  ngOnInit(): void {
    // pageroute é um wrapper do activatedRoute que carrega um novo activatedroute quando a pagina carrega de novo, impedindo que colete paginas repetidas do cache
    this.pageRoute.activatedRoute.subscribe((activatedRoute) => {
      activatedRoute.paramMap.subscribe((paramMap) => {
        if (!paramMap.has("mode")) {
          this.isCreating = true;
        } else {
          this.isCreating = paramMap.get("mode") !== "edit";
        }
      });
    });
  }

  onSubmit(title: string, description: string) {
    this.challengeService.createNewChallenge(title, description);
    this.router.backToPreviousPage();
  }
}
