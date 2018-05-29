import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { AutocompleteComponent } from './form-controls/autocomplete/autocomplete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CheckboxComponent } from './form-controls/checkbox/checkbox.component';
import { DatepickerComponent } from './form-controls/datepicker/datepicker.component';
import { FormfieldsComponent } from './form-controls/formfields/formfields.component';
import { InputComponent } from './form-controls/input/input.component';
import { RadioComponent } from './form-controls/radio/radio.component';
import { SelectComponent } from './form-controls/select/select.component';
import { SliderComponent } from './form-controls/slider/slider.component';
import { SlideComponent } from './form-controls/slide/slide.component';
import { MenuComponent } from './layout/menu/menu.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { CardComponent } from './layout/card/card.component';
import { ListComponent } from './layout/list/list.component';
import { StepperComponent } from './layout/stepper/stepper.component';
import { TabsComponent } from './layout/tabs/tabs.component';
import { ButtonComponent } from './buttons-indicators/button/button.component';
import { ToggleButtonComponent } from './buttons-indicators/toggle-button/toggle-button.component';
import { ChipsComponent } from './buttons-indicators/chips/chips.component';
import { ExpansionPanelComponent } from './layout/expansion-panel/expansion-panel.component';
import { GridComponent } from './layout/grid/grid.component';
import { TreeComponent } from './layout/tree/tree.component';
import { SpinnerProgessComponent } from './buttons-indicators/spinner-progess/spinner-progess.component';
import { ProgressBarComponent } from './buttons-indicators/progress-bar/progress-bar.component';
import { DialogComponent } from './popups-modals/dialog/dialog.component';
import { DialogOverviewExampleDialog } from './popups-modals/dialog/dialog.component';
import { SnackbarComponent, SnackbarDialogComponent } from './popups-modals/snackbar/snackbar.component';
import { TooltipComponent } from './popups-modals/tooltip/tooltip.component';
import { PaginatorComponent } from './datatable/paginator/paginator.component';
import { TableComponent } from './datatable/table/table.component';
import { TableHttpComponent } from './datatable/table-http/table-http.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  declarations: [
    AutocompleteComponent,
    CheckboxComponent,
    DatepickerComponent,
    FormfieldsComponent,
    InputComponent,
    RadioComponent,
    SelectComponent,
    SliderComponent,
    SlideComponent,
    MenuComponent,
    SidenavComponent,
    ToolbarComponent,
    CardComponent,
    ListComponent,
    StepperComponent,
    TabsComponent,
    ButtonComponent,
    ToggleButtonComponent,
    ChipsComponent,
    ExpansionPanelComponent,
    GridComponent,
    TreeComponent,
    SpinnerProgessComponent,
    ProgressBarComponent,
    DialogComponent,
    DialogOverviewExampleDialog,
    SnackbarComponent,
    SnackbarDialogComponent,
    TooltipComponent,
    PaginatorComponent,
    TableComponent,
    TableHttpComponent
  ],
  entryComponents: [
    DialogOverviewExampleDialog,
    SnackbarDialogComponent
  ]
})
export class ComponentsModule { }
