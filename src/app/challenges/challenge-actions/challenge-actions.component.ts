import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from "@angular/core";
import { DayStatus } from "../challenge.model";

@Component({
  selector: "ns-challenge-actions",
  templateUrl: "./challenge-actions.component.html",
  styleUrls: ["./challenge-actions.component.scss"],
})
export class ChallengeActionsComponent implements OnInit, OnChanges {
  @Output() actionSelect = new EventEmitter<DayStatus>();
  @Input() cancelText = "Cancel";
  @Input() chosen: "completed" | "failed" = null;
  action: "completed" | "failed" = null;
  done = false;

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.chosen) {
      this.action = changes.chosen.currentValue;
    }
  }

  ngOnInit() {}

  onAction(action: string) {
    this.done = true;
    let status = DayStatus.Open;
    if (action === "completed") {
      status = DayStatus.Completed;
      this.action = "completed";
    } else if (action === "failed") {
      status = DayStatus.Failed;
      this.action = "failed";
    } else if (action === "cancel") {
      this.action = null;
      this.done = false;
    }
    this.actionSelect.emit(status);
  }
}
