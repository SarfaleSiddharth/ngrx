import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, first, switchMap } from 'rxjs/operators';
import * as EmpsActions from '../store/actions/employee.actions';
import * as fromRoot from '../store/reducers/index.reducer';
import { Employee } from './../store/models/employee.model';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  public emp$: Observable<Employee[]>;
  public form = {};
  public isUpdate = false;
  public company;
  public data = [];

  constructor(private store: Store<fromRoot.State>, ) {
    this.store.dispatch(new EmpsActions.FetchEmpsRequest());
    this.emp$ = store.pipe(select(fromRoot.getAllEmps));
    this.emp$.subscribe(res => {
      this.data = res;
    });
  }

  ngOnInit() {
  }

  cancel() {
    this.isUpdate = false;
    this.form = {};
  }

  addEmployee() {
    this.store.dispatch(new EmpsActions.AddEmpRequest({ ...this.form }));
    this.form = {};
  }

  filter(text) {
    this.store.dispatch(new EmpsActions.SearchEmpRequest({ company_like: text }));
  }
  editEmployee(item) {
    this.isUpdate = true;
    this.form = { ...item };
  }

  updateEmployee() {
    this.store.dispatch(new EmpsActions.UpdateEmpRequest({ ...this.form }));
    this.isUpdate = false;
    this.form = {};
  }

  deleteEmployee(id) {
    this.store.dispatch(new EmpsActions.DeleteEmpRequest(id));
  }
}
