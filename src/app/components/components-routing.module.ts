import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutocompleteComponent } from './form-controls/autocomplete/autocomplete.component';


const routes: Routes = [
  { path: 'form-controls/autocomplete', component: AutocompleteComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentsRoutingModule { }

export const routedComponents = [AutocompleteComponent];

