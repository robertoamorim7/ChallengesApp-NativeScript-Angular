import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "@nativescript/angular";

import { NativeScriptFormsModule } from "@nativescript/angular";
import { AppRoutingModule } from "./app-routing.module";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { SharedModule } from "./shared/ui/shared.module";
import { ChallengeActionsModule } from "./challenges/challenge-actions/challenge-actions.module";

import { AppComponent } from "./app.component";
import { AuthComponent } from "./auth/auth.component";
import { DayModalComponent } from "./challenges/day-modal/day-modal.component";

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    AppRoutingModule,
    NativeScriptUISideDrawerModule,
    SharedModule,
    ChallengeActionsModule,
  ],
  declarations: [AppComponent, AuthComponent, DayModalComponent],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
  //entryComponents: [DayModalComponent] deprecated? funciona sem essa configuração
})
export class AppModule {}
