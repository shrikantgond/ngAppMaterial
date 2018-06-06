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
  { path: 'form-controls/autocomplete', component: AutocompleteComponent, data: {breadcrumb: 'Autocomplete'} },
  { path: 'checkbox', component: CheckboxComponent, data: {breadcrumb: 'Checkbox'},
children: [
  {
    path: 'datepicker', component: DatepickerComponent, data: {breadcrumb: 'Datepicker'}
  }
]},
  { path: 'form-controls/datepicker', component: DatepickerComponent, data: {breadcrumb: 'Datepicker'} },
  { path: 'form-controls/formfields', component: FormfieldsComponent, data: {breadcrumb: 'Formfields'} },
  { path: 'form-controls/input', component: InputComponent, data: {breadcrumb: 'Checkbox'} },
  { path: 'form-controls/radio', component: RadioComponent, data: {breadcrumb: 'Checkbox'} },
  { path: 'form-controls/select', component: SelectComponent, data: {breadcrumb: 'Checkbox'} },
  { path: 'form-controls/slider', component: SliderComponent, data: {breadcrumb: 'Checkbox'} },
  { path: 'form-controls/slide', component: SlideComponent, data: {breadcrumb: 'Checkbox'} },
  { path: 'layout/menu', component: MenuComponent, data: {breadcrumb: 'Checkbox'} },
  { path: 'layout/sidenav', component: SidenavComponent, data: {breadcrumb: 'Checkbox'} },
  { path: 'layout/toolbar', component: ToolbarComponent, data: {breadcrumb: 'Checkbox'} },
  { path: 'layout/card', component: CardComponent, data: {breadcrumb: 'Checkbox'} },
  { path: 'layout/list', component: ListComponent, data: {breadcrumb: 'Checkbox'} },
  { path: 'layout/stepper', component: StepperComponent, data: {breadcrumb: 'Checkbox'} },
  { path: 'layout/tabs', component: TabsComponent, data: {breadcrumb: 'Checkbox'} },
  { path: 'buttons-indicators/button', component: ButtonComponent, data: {breadcrumb: 'Checkbox'} },
  { path: 'buttons-indicators/toggle-button', component: ToggleButtonComponent, data: {breadcrumb: 'Checkbox'} },
  { path: 'buttons-indicators/chips', component: ChipsComponent, data: {breadcrumb: 'Checkbox'} },
  { path: 'layout/expansion-panel', component: ExpansionPanelComponent, data: {breadcrumb: 'Checkbox'} },
  { path: 'layout/grid', component: GridComponent, data: {breadcrumb: 'Checkbox'} },
  { path: 'buttons-indicators/spinnerprogress', component: SpinnerProgessComponent, data: {breadcrumb: 'Checkbox'} },
  { path: 'buttons-indicators/progressbar', component: ProgressBarComponent, data: {breadcrumb: 'Checkbox'} },
  { path: 'popups-modals/dialog', component: DialogComponent, data: {breadcrumb: 'Checkbox'} },
  { path: 'popups-modals/snackbar', component: SnackbarComponent, data: {breadcrumb: 'Checkbox'} },
  { path: 'popups-modals/tooltip', component: TooltipComponent, data: {breadcrumb: 'Checkbox'} },
  { path: 'datatable/paginator', component: PaginatorComponent, data: {breadcrumb: 'Checkbox'} },
  { path: 'datatable/table', component: TableComponent, data: {breadcrumb: 'Checkbox'} },
  { path: 'datatable/table-http', component: TableHttpComponent, data: {breadcrumb: 'Checkbox'} },
  // { path: 'layout/tree', component: TreeComponent, data: {breadcrumb: 'Checkbox'} },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentsRoutingModule { }

export const routedComponents = [AutocompleteComponent];

