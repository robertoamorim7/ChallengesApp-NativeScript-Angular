import { UIService } from "./../../shared/ui/ui.service";
import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { ModalDialogService } from "@nativescript/angular";
import { DayModalComponent } from "./../day-modal/day-modal.component";

@Component({
  selector: "ns-current-challenge",
  templateUrl: "./current-challenge.component.html",
  styleUrls: [
    "./_current-challenge.component.common.scss",
    "./current-challenge.component.scss",
  ],
})
export class CurrentChallengeComponent implements OnInit {
  weekDays = ["S", "M", "T", "W", "T", "F", "S"];
  days: { dayInMonth: number; dayInWeek: number }[] = [];

  constructor(
    private modalDialog: ModalDialogService,
    private vcRef: ViewContainerRef,
    private uiService: UIService
  ) {}

  ngOnInit(): void {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    for (let i = 1; i < daysInMonth + 1; i++) {
      const date = new Date(currentYear, currentMonth, i);
      const dayInWeek = date.getDay();
      this.days.push({ dayInMonth: i, dayInWeek: dayInWeek });
    }
  }

  onChangeStatus() {
    this.modalDialog
      .showModal(DayModalComponent, {
        fullscreen: true,
        viewContainerRef: this.uiService.getRootVCRef()
          ? this.uiService.getRootVCRef()
          : this.vcRef,
        context: { date: new Date() }, //passando dados para o modal (qualquer tipo de dado)
      })
      .then((res: string) => {
        console.log(res);
      });
  }
}
