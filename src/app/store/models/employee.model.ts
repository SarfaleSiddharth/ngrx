import { schema } from 'normalizr';

export interface Employee {
    id: string;
    name: string;
    company: boolean;
}

export const employee = new schema.Entity('employees');

export const arrayOfEmployees = new schema.Array(employee);