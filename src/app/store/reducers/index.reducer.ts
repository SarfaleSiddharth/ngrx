import {
    ActionReducerMap,
    createFeatureSelector,
    createSelector
} from '@ngrx/store';
import * as fromEmps from './employee.reducer';

import { Employee } from './../models/employee.model';

export interface State {
    employees: fromEmps.State;
}

export const reducers: ActionReducerMap<State> = {
    employees: fromEmps.employees,
};

export const getEmpsState = createFeatureSelector<fromEmps.State>('employees');

export const getAllEmps = createSelector(
    getEmpsState,
    fromEmps.getAllEmps
);