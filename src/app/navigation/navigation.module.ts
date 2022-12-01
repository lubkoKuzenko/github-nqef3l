import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavigationComponent } from "./navigation.component";
import { SharedModule } from "@shared/shared.module";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule],
  declarations: [NavigationComponent],
  exports: [NavigationComponent],
})
export class NavigationModule {}
