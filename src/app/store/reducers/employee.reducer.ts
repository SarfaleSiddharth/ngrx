import { combineReducers } from '@ngrx/store';
import { EmployeesActionTypes, EmployeeActionsUnion } from '../actions/employee.actions';
import { Employee } from '../models/employee.model';

export interface State {
    byId: { [id: string]: Employee };
    allIds: string[];
}

const byId = (
    state: { [id: string]: Employee } = {},
    action: EmployeeActionsUnion
): { [id: string]: Employee } => {
    switch (action.type) {
        case EmployeesActionTypes.FETCH_EMPS_SUCCESS:
        case EmployeesActionTypes.ADD_EMP_SUCCESS:
        case EmployeesActionTypes.UPDATE_EMP_SUCCESS:
        case EmployeesActionTypes.SEARCH_EMP_SUCCESS:
            return {
                ...state,
                ...action.payload.entities.employees
            };
        default:
            return state;
    }
};

const allIds = (state: string[] = [], action: EmployeeActionsUnion): string[] => {
    switch (action.type) {
        case EmployeesActionTypes.FETCH_EMPS_SUCCESS:
        case EmployeesActionTypes.SEARCH_EMP_SUCCESS:
            return action.payload.result;
        case EmployeesActionTypes.ADD_EMP_SUCCESS:
            return [...state, action.payload.result.toString()];
        case EmployeesActionTypes.UPDATE_EMP_SUCCESS:
            return [...state];
        default:
            return state;
    }
};

export const employees = combineReducers({
    byId,
    allIds
});

export const getAllEmps = (state: State): Employee[] => {
    console.log('state:', state);
    return state.allIds.map(id => state.byId[id]);
}