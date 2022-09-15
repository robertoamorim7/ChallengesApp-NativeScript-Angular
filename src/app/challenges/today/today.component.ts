import { Subscription } from "rxjs";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { isAndroid, Page } from "@nativescript/core";
import { ChallengeService } from "../challenge.service";
import { Day, DayStatus } from "./../challenge.model";

@Component({
  selector: "ns-today",
  templateUrl: "./today.component.html",
  styleUrls: ["./today.component.scss"],
})
export class TodayComponent implements OnInit, OnDestroy {
  currentDay: Day;
  private curChallengeSub: Subscription;

  constructor(private challengeService: ChallengeService) {}

  ngOnInit() {
    this.curChallengeSub = this.challengeService.currentChallenge.subscribe(
      (challenge) => {
        if (challenge) {
          this.currentDay = challenge.currentDay;
        }
      }
    );
  }

  onActionSelect(action: DayStatus) {
    this.challengeService.updateDayStatus(this.currentDay.dayInMonth, action);
  }

  getActionName() {
    if (this.currentDay.status === DayStatus.Completed) {
      return "completed";
    }
    if (this.currentDay.status === DayStatus.Failed) {
      return "failed";
    }
    return null;
  }

  ngOnDestroy(): void {
    if (this.challengeService) {
      this.curChallengeSub.unsubscribe();
    }
  }
}
