import { CommonModule } from "@angular/common";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import {
  NativeScriptCommonModule,
  NativeScriptModule,
} from "@nativescript/angular";
import { ActionBarComponent } from "./action-bar/action-bar.component";

@NgModule({
  imports: [NativeScriptCommonModule],
  declarations: [ActionBarComponent],
  exports: [ActionBarComponent],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class SharedModule {}
