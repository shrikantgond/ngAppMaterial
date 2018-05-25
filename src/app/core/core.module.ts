import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ExceptionService } from './exception.service';
import { LoggerService } from './logger.service';
import { SpinnerComponent } from './spinner/spinner.component';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { DashboardComponent } from './dashboard/dashboard.component';

// TODO: Onlly import this module in AppModule

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SpinnerComponent, DashboardComponent],
  providers: [ExceptionService, LoggerService]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
