import { Component, OnInit } from "@angular/core";
import { ModalDialogParams } from "@nativescript/angular";
import { DayStatus } from "../challenge.model";

@Component({
  selector: "ns-day-modal",
  templateUrl: "./day-modal.component.html",
  styleUrls: ["./day-modal.component.css"],
})
export class DayModalComponent implements OnInit {
  loadedDate: Date;
  loadedStatus: "completed" | "failed" = null;

  constructor(private modalParams: ModalDialogParams) {}

  ngOnInit() {
    const parsedParams = this.modalParams.context as {
      date: Date;
      status: DayStatus;
    };
    this.loadedDate = parsedParams.date;
    if (parsedParams.status === DayStatus.Completed) {
      this.loadedStatus = "completed";
    } else if (parsedParams.status === DayStatus.Failed) {
      this.loadedStatus = "failed";
    } else {
      this.loadedStatus = null;
    }
  }

  onHandleInput(action: DayStatus) {
    this.modalParams.closeCallback(action);
  }
}
