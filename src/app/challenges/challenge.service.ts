import { Injectable } from "@angular/core";
import { BehaviorSubject, take } from "rxjs";
import { Challenge, DayStatus } from "./challenge.model";

@Injectable({ providedIn: "root" })
export class ChallengeService {
  private _currentChallenge = new BehaviorSubject<Challenge>(null);

  get currentChallenge() {
    return this._currentChallenge.asObservable();
  }

  createNewChallenge(title: string, description: string) {
    const challenge = new Challenge(
      title,
      description,
      new Date().getFullYear(),
      new Date().getMonth()
    );

    this._currentChallenge.next(challenge);
  }

  updateChallenge(title: string, description: string) {
    this._currentChallenge.pipe(take(1)).subscribe((challenge) => {
      const updatedChallenge = new Challenge(
        title,
        description,
        challenge.year,
        challenge.month,
        challenge.days
      );
      this._currentChallenge.next(updatedChallenge);
    });
  }

  updateDayStatus(dayInMonth: number, dayStatus: DayStatus) {
    this.currentChallenge.pipe(take(1)).subscribe((challenge) => {
      if (!challenge || challenge.days.length < dayInMonth) {
        return;
      }
      const dayIndex = challenge.days.findIndex(
        (d) => d.dayInMonth === dayInMonth
      );
      challenge.days[dayIndex].status = dayStatus;
      this._currentChallenge.next(challenge);
      // console.log(challenge.days[dayIndex]);
    });
  }

  constructor() {}
}
