import { NgModule, Type } from "@angular/core";
import { SharedModule } from "@shared/shared.module";

import { RedDeviceComponent } from "./red-device/red-device.component";
import { BlueDeviceComponent } from "./blue-device/blue-device.component";
import { GreenDeviceComponent } from "./green-device/green-device.component";
import { ScrollingModule } from "@angular/cdk/scrolling";

const dcComponents: Type<any>[] = [RedDeviceComponent, GreenDeviceComponent, BlueDeviceComponent];

@NgModule({
  imports: [SharedModule, ScrollingModule],
  declarations: [...dcComponents],
  exports: [...dcComponents],
})
export class DCComponentsModule {}
