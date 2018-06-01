import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutocompleteComponent } from './form-controls/autocomplete/autocomplete.component';
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
import { SnackbarComponent } from './popups-modals/snackbar/snackbar.component';
import { TooltipComponent } from '@angular/material';
import { PaginatorComponent } from './datatable/paginator/paginator.component';
import { TableComponent } from './datatable/table/table.component';
import { TableHttpComponent } from './datatable/table-http/table-http.component';


const routes: Routes = [
  { path: 'form-controls/autocomplete', component: AutocompleteComponent },
  { path: 'form-controls/checkbox', component: CheckboxComponent },
  { path: 'form-controls/datepicker', component: DatepickerComponent },
  { path: 'form-controls/formfields', component: FormfieldsComponent },
  { path: 'form-controls/input', component: InputComponent },
  { path: 'form-controls/radio', component: RadioComponent },
  { path: 'form-controls/select', component: SelectComponent },
  { path: 'form-controls/slider', component: SliderComponent },
  { path: 'form-controls/slide', component: SlideComponent },
  { path: 'layout/menu', component: MenuComponent },
  { path: 'layout/sidenav', component: SidenavComponent },
  { path: 'layout/toolbar', component: ToolbarComponent },
  { path: 'layout/card', component: CardComponent },
  { path: 'layout/list', component: ListComponent },
  { path: 'layout/stepper', component: StepperComponent },
  { path: 'layout/tabs', component: TabsComponent },
  { path: 'buttons-indicators/button', component: ButtonComponent },
  { path: 'buttons-indicators/toggle-button', component: ToggleButtonComponent },
  { path: 'buttons-indicators/chips', component: ChipsComponent },
  { path: 'layout/expansion-panel', component: ExpansionPanelComponent },
  { path: 'layout/grid', component: GridComponent },
  { path: 'buttons-indicators/spinnerprogress', component: SpinnerProgessComponent },
  { path: 'buttons-indicators/progressbar', component: ProgressBarComponent },
  { path: 'popups-modals/dialog', component: DialogComponent },
  { path: 'popups-modals/snackbar', component: SnackbarComponent },
  { path: 'popups-modals/tooltip', component: TooltipComponent },
  { path: 'datatable/paginator', component: PaginatorComponent },
  { path: 'datatable/table', component: TableComponent },
  { path: 'datatable/table-http', component: TableHttpComponent },
  // { path: 'layout/tree', component: TreeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentsRoutingModule { }

export const routedComponents = [AutocompleteComponent];

