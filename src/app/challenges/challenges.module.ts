import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular";
import { ChallengesRoutingModule } from "./challenges-routing.module";
import { SharedModule } from "../shared/ui/shared.module";
import { ChallengeActionsModule } from "./challenge-actions/challenge-actions.module";

import { ChallengeTabsComponent } from "./challenge-tabs/challenge-tabs.component";
import { CurrentChallengeComponent } from "./current-challenge/current-challenge.component";
import { ChallengeEditComponent } from "./challenge-edit/challenge-edit.component";
import { TodayComponent } from "./today/today.component";

@NgModule({
  imports: [
    NativeScriptCommonModule,
    ChallengesRoutingModule,
    SharedModule,
    ChallengeActionsModule,
  ],
  exports: [],
  declarations: [
    ChallengeEditComponent,
    ChallengeTabsComponent,
    CurrentChallengeComponent,
    TodayComponent,
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class ChallengesModule {}
