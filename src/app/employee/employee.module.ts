import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AutocompleteModule } from './../autocomplete/autocomplete.module';
@NgModule({
  declarations: [EmployeeComponent],
  imports: [
    CommonModule,
    FormsModule,
    AutocompleteModule,
    RouterModule.forChild([{
      path: '',
      component: EmployeeComponent
    }])
  ]
})
export class EmployeeModule { }
