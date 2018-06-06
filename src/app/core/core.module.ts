import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ExceptionService } from './exception.service';
import { LoggerService } from './logger.service';
import { SpinnerComponent } from './spinner/spinner.component';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SharedModule } from '../shared/shared.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { NavigationService } from './navigation.service';
import { AppRoutingModule } from '../app-routing.module';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

// TODO: Onlly import this module in AppModule

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ],
  exports: [DashboardComponent, SidenavComponent, ToolbarComponent, BreadcrumbComponent],
  declarations: [SpinnerComponent, DashboardComponent, SidenavComponent, ToolbarComponent, BreadcrumbComponent],
  providers: [ExceptionService, LoggerService, NavigationService]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
