import { NativeScriptRouterModule } from "@nativescript/angular";
import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";

import { ChallengeEditComponent } from "./challenge-edit/challenge-edit.component";
import { CurrentChallengeComponent } from "./current-challenge/current-challenge.component";
import { TodayComponent } from "./today/today.component";
import { ChallengeTabsComponent } from "./challenge-tabs/challenge-tabs.component";

export const routes: Routes = [
  {
    path: "tabs",
    component: ChallengeTabsComponent,
    children: [
      { path: "today", component: TodayComponent, outlet: "today" },
      {
        path: "current-challenge",
        component: CurrentChallengeComponent,
        outlet: "current",
      },
    ],
  },

  { path: ":mode", component: ChallengeEditComponent },
  { path: "", redirectTo: "/challenges/tabs", pathMatch: "full" },
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
  declarations: [],
  providers: [],
})
export class ChallengesRoutingModule {}
