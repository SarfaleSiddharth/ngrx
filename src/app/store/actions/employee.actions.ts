import { Action } from '@ngrx/store';
import {
    NormalizedEntities,
    NormalizedEntity
} from '../models/normalized-entities.model';
import { Employee } from './../models/employee.model';

export enum EmployeesActionTypes {
    FETCH_EMPS_REQUEST = 'FETCH_EMPS_REQUEST',
    FETCH_EMPS_SUCCESS = 'FETCH_EMPS_SUCCESS',
    FETCH_EMPS_FAILURE = 'FETCH_EMPS_FAILURE',

    ADD_EMP_REQUEST = 'ADD_EMP_REQUEST',
    ADD_EMP_SUCCESS = 'ADD_EMP_SUCCESS',
    ADD_EMP_FAILURE = 'ADD_EMP_FAILURE',

    DELETE_EMP_REQUEST = 'DELETE_EMP_REQUEST',
    DELETE_EMP_SUCCESS = 'DELETE_EMP_SUCCESS',
    DELETE_EMP_FAILURE = 'DELETE_EMP_FAILURE',

    UPDATE_EMP_REQUEST = 'UPDATE_EMP_REQUEST',
    UPDATE_EMP_SUCCESS = 'UPDATE_EMP_SUCCESS',
    UPDATE_EMP_FAILURE = 'UPDATE_EMP_FAILURE',

    SEARCH_EMP_REQUEST = 'SEARCH_EMP_REQUEST',
    SEARCH_EMP_SUCCESS = 'SEARCH_EMP_SUCCESS',
    SEARCH_EMP_FAILURE = 'SEARCH_EMP_FAILURE',
}

// Fatch
export class FetchEmpsRequest implements Action {
    readonly type = EmployeesActionTypes.FETCH_EMPS_REQUEST;
}
export class FetchEmpsSuccess implements Action {
    readonly type = EmployeesActionTypes.FETCH_EMPS_SUCCESS;
    constructor(public payload: NormalizedEntities<Employee>) {
    }
}
export class FetchEmpsFailure implements Action {
    readonly type = EmployeesActionTypes.FETCH_EMPS_FAILURE;
}

//Add
export class AddEmpRequest implements Action {
    readonly type = EmployeesActionTypes.ADD_EMP_REQUEST;
    constructor(public payload: any) {
    }
}

export class AddEmpSuccess implements Action {
    readonly type = EmployeesActionTypes.ADD_EMP_SUCCESS;
    constructor(public payload: NormalizedEntities<Employee>) {
    }
}

export class AddEmpFailure implements Action {
    readonly type = EmployeesActionTypes.ADD_EMP_FAILURE;
}

//Delete
export class DeleteEmpRequest implements Action {
    readonly type = EmployeesActionTypes.DELETE_EMP_REQUEST;
    constructor(public payload: number) {
    }
}

export class DeleteEmpSuccess implements Action {
    readonly type = EmployeesActionTypes.DELETE_EMP_SUCCESS;
    constructor(public payload: NormalizedEntities<Employee>) {
    }
}

export class DeleteEmpFailure implements Action {
    readonly type = EmployeesActionTypes.DELETE_EMP_FAILURE;
}

// update
export class UpdateEmpRequest implements Action {
    readonly type = EmployeesActionTypes.UPDATE_EMP_REQUEST;
    constructor(public payload: any) {
    }
}

export class UpdateEmpSuccess implements Action {
    readonly type = EmployeesActionTypes.UPDATE_EMP_SUCCESS;
    constructor(public payload: NormalizedEntities<Employee>) {
    }
}

export class UpdateEmpFailure implements Action {
    readonly type = EmployeesActionTypes.UPDATE_EMP_FAILURE;
}

// Search

export class SearchEmpRequest implements Action {
    readonly type = EmployeesActionTypes.SEARCH_EMP_REQUEST;
    constructor(public payload: any) {
    }
}

export class SearchEmpSuccess implements Action {
    readonly type = EmployeesActionTypes.SEARCH_EMP_SUCCESS;
    constructor(public payload: NormalizedEntities<Employee>) {
    }
}

export class SearchEmpFailure implements Action {
    readonly type = EmployeesActionTypes.SEARCH_EMP_FAILURE;
}


// Make Union
export type EmployeeActionsUnion =
    FetchEmpsRequest |
    FetchEmpsSuccess |
    FetchEmpsFailure |
    AddEmpRequest |
    AddEmpSuccess |
    AddEmpFailure |
    DeleteEmpRequest |
    DeleteEmpSuccess |
    DeleteEmpFailure |
    UpdateEmpRequest |
    UpdateEmpSuccess |
    UpdateEmpFailure |
    SearchEmpRequest |
    SearchEmpSuccess |
    SearchEmpFailure;


