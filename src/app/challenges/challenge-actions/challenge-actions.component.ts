import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "ns-challenge-actions",
  templateUrl: "./challenge-actions.component.html",
  styleUrls: ["./challenge-actions.component.scss"],
})
export class ChallengeActionsComponent implements OnInit {
  @Output() actionSelect = new EventEmitter<string>();
  @Input() cancelText = "Cancel";

  constructor() {}

  ngOnInit() {}

  onAction(action: string) {
    this.actionSelect.emit(action);
  }
}
