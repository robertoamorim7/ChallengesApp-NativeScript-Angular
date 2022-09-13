import { UIService } from "./shared/ui/ui.service";
import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  AfterViewInit,
  ChangeDetectorRef,
  ViewContainerRef,
} from "@angular/core";
import { Subscription } from "rxjs";
import { RadSideDrawerComponent } from "nativescript-ui-sidedrawer/angular";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";

@Component({
  selector: "ns-app",
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(RadSideDrawerComponent) drawerComponent: RadSideDrawerComponent;

  private drawerSub: Subscription;
  private drawer: RadSideDrawer;

  constructor(
    private uiService: UIService,
    private changeDetectionRef: ChangeDetectorRef,
    private vcRef: ViewContainerRef
  ) {}

  ngOnInit(): void {
    this.drawerSub = this.uiService.drawerState.subscribe(() => {
      if (this.drawer) {
        this.drawer.toggleDrawerState();
      }
    });
    this.uiService.setRootVCRef(this.vcRef);
  }

  ngAfterViewInit(): void {
    this.drawer = this.drawerComponent.sideDrawer;

    this.changeDetectionRef.detectChanges();
  }

  ngOnDestroy(): void {
    if (this.drawerSub) {
      this.drawerSub.unsubscribe();
    }
  }

  onLogout() {
    this.uiService.toggleDrawer();
  }
}
