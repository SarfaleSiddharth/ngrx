import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { normalize } from 'normalizr';
import * as empSchema from './../models/employee.model';
import * as EmpsActions from './../actions/employee.actions';
import { ServiceService } from './../../services/service.service';
import { debounce } from 'rxjs/operators';
import { fromEvent, interval } from 'rxjs';

@Injectable()
export class EmployeeEffects {
  constructor(private actions$: Actions, private service: ServiceService) { }

  @Effect()
  fetchEmps$: Observable<Action> = this.actions$.pipe(
    ofType(EmpsActions.EmployeesActionTypes.FETCH_EMPS_REQUEST),
    switchMap(() =>
      this.service.get('/employees').pipe(
        map(
          (emps: empSchema.Employee[]) =>
            new EmpsActions.FetchEmpsSuccess(
              normalize(emps, empSchema.arrayOfEmployees)
            )
        ))
    )
  );

  @Effect()
  addEmp$: Observable<Action> = this.actions$.pipe(
    ofType(EmpsActions.EmployeesActionTypes.ADD_EMP_REQUEST),
    mergeMap((action: EmpsActions.AddEmpRequest) =>
      this.service.post('/employees', action.payload).pipe(
        map(
          (emp: empSchema.Employee) =>
            new EmpsActions.AddEmpSuccess(normalize(emp, empSchema.employee))
        )
      )
    )
  );

  @Effect()
  updateEmp$: Observable<Action> = this.actions$.pipe(
    ofType(EmpsActions.EmployeesActionTypes.UPDATE_EMP_REQUEST),
    mergeMap((action: EmpsActions.AddEmpRequest) =>
      this.service.put(`/employees/${action.payload.id}`, action.payload).pipe(
        map(
          (emp: empSchema.Employee) =>
            new EmpsActions.UpdateEmpSuccess(normalize(emp, empSchema.employee))
        )
      )
    )
  );

  @Effect()
  deleteEmp$: Observable<Action> = this.actions$.pipe(
    ofType(EmpsActions.EmployeesActionTypes.DELETE_EMP_REQUEST),
    mergeMap((action: EmpsActions.AddEmpRequest) =>
      this.service.delete(`/employees/${action.payload}`).pipe(
        map(
          (emp: empSchema.Employee) =>
            new EmpsActions.FetchEmpsRequest()
        )
      )
    )
  );

  @Effect()
  SearchEmps$: Observable<Action> = this.actions$.pipe(debounce(() => interval(500))).pipe(
    ofType(EmpsActions.EmployeesActionTypes.SEARCH_EMP_REQUEST),
    switchMap((action: EmpsActions.SearchEmpRequest) =>
      this.service.search('/employees', action.payload).pipe(
        map(
          (emps: empSchema.Employee[]) =>
            new EmpsActions.SearchEmpSuccess(
              normalize(emps, empSchema.arrayOfEmployees)
            )
        ))
    )
  );
}
