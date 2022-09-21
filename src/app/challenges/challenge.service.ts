import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, take, tap } from "rxjs";
import { Challenge, Day, DayStatus } from "./challenge.model";

@Injectable({ providedIn: "root" })
export class ChallengeService {
  private _currentChallenge = new BehaviorSubject<Challenge>(null);

  constructor(private http: HttpClient) {}

  get currentChallenge() {
    return this._currentChallenge.asObservable();
  }

  fetchCurrentChallenge() {
    return this.http
      .get<{
        title: string;
        description: string;
        month: number;
        year: number;
        _days: Day[];
      }>(
        "https://nativescript-angular-app-default-rtdb.firebaseio.com/challenge.json"
      )
      .pipe(
        tap((res) => {
          if (res) {
            const loadedChallenge = new Challenge(
              res.title,
              res.description,
              res.year,
              res.month,
              res._days
            );
            this._currentChallenge.next(loadedChallenge);
          }
        })
      );
  }

  createNewChallenge(title: string, description: string) {
    const challenge = new Challenge(
      title,
      description,
      new Date().getFullYear(),
      new Date().getMonth()
    );
    //save to backend with firebase
    this.saveToServer(challenge);
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
      //send to backend
      this.saveToServer(updatedChallenge);
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
      this.saveToServer(challenge);
    });
  }

  private saveToServer(challenge: Challenge) {
    this.http
      .put(
        "https://nativescript-angular-app-default-rtdb.firebaseio.com/challenge.json",
        challenge
      )
      .subscribe();
  }
}
