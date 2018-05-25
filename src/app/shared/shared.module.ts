import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule, MatFormFieldModule, MatInputModule } from '@angular/material';

// TODO: Do declare all components, directives, and pipes in the SharedModule.

@NgModule({
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: []
})
export class SharedModule { }
