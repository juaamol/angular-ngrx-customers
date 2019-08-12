import { Action } from "@ngrx/store";
import { Customer } from "../customer.model";
import { Update } from "@ngrx/entity";

export enum CustomerActionTypes {
  LOAD_CUSTOMERS = "[Customer] Load customers",
  LOAD_CUSTOMERS_SUCCESS = "[Customer] Load customers Success",
  LOAD_CUSTOMERS_FAIL = "[Customer] Load customers Fail",
  LOAD_CUSTOMER = "[Customer] Load customer",
  LOAD_CUSTOMER_SUCCESS = "[Customer] Load customer Success",
  LOAD_CUSTOMER_FAIL = "[Customer] Load customer Fail",
  CREATE_CUSTOMER = "[Customer] Create customer",
  CREATE_CUSTOMER_SUCCESS = "[Customer] Create customer Success",
  CREATE_CUSTOMER_FAIL = "[Customer] Create customer Fail",
  UPDATE_CUSTOMER = "[Customer] Update customer",
  UPDATE_CUSTOMER_SUCCESS = "[Customer] Update customer Success",
  UPDATE_CUSTOMER_FAIL = "[Customer] Update customer Fail",
  DELETE_CUSTOMER = "[Customer] Delete customer",
  DELETE_CUSTOMER_SUCCESS = "[Customer] Delete customer Success",
  DELETE_CUSTOMER_FAIL = "[Customer] Delete customer Fail",
}

export class LoadCustomers implements Action {
  readonly type = CustomerActionTypes.LOAD_CUSTOMERS;
}

export class LoadCustomersSuccess implements Action {
  readonly type = CustomerActionTypes.LOAD_CUSTOMERS_SUCCESS;

  constructor(public payload: Customer[]) {}
}

export class LoadCustomersFail implements Action {
  readonly type = CustomerActionTypes.LOAD_CUSTOMERS_FAIL;

  constructor(public payload: string) {}
}
export class LoadCustomer implements Action {
  readonly type = CustomerActionTypes.LOAD_CUSTOMER;

  constructor(public payload: number) {}
}

export class LoadCustomerSuccess implements Action {
  readonly type = CustomerActionTypes.LOAD_CUSTOMER_SUCCESS;

  constructor(public payload: Customer) {}
}

export class LoadCustomerFail implements Action {
  readonly type = CustomerActionTypes.LOAD_CUSTOMER_FAIL;

  constructor(public payload: string) {}
}
export class CreateCustomer implements Action {
  readonly type = CustomerActionTypes.CREATE_CUSTOMER;

  constructor(public payload: Customer) {}
}

export class CreateCustomerSuccess implements Action {
  readonly type = CustomerActionTypes.CREATE_CUSTOMER_SUCCESS;

  constructor(public payload: Customer) {}
}

export class CreateCustomerFail implements Action {
  readonly type = CustomerActionTypes.CREATE_CUSTOMER_FAIL;

  constructor(public payload: string) {}
}
export class UpdateCustomer implements Action {
  readonly type = CustomerActionTypes.UPDATE_CUSTOMER;

  constructor(public payload: Customer) {}
}

export class UpdateCustomerSuccess implements Action {
  readonly type = CustomerActionTypes.UPDATE_CUSTOMER_SUCCESS;

  constructor(public payload: Update<Customer>) {}
}

export class UpdateCustomerFail implements Action {
  readonly type = CustomerActionTypes.UPDATE_CUSTOMER_FAIL;

  constructor(public payload: string) {}
}
export class DeleteCustomer implements Action {
  readonly type = CustomerActionTypes.DELETE_CUSTOMER;

  constructor(public payload: number) {}
}

export class DeleteCustomerSuccess implements Action {
  readonly type = CustomerActionTypes.DELETE_CUSTOMER_SUCCESS;

  constructor(public payload: number) {}
}

export class DeleteCustomerFail implements Action {
  readonly type = CustomerActionTypes.DELETE_CUSTOMER_FAIL;

  constructor(public payload: string) {}
}

export type Action =
  | LoadCustomers
  | LoadCustomersSuccess
  | LoadCustomersFail
  | LoadCustomer
  | LoadCustomerSuccess
  | LoadCustomerFail
  | CreateCustomer
  | CreateCustomerSuccess
  | CreateCustomerFail
  | UpdateCustomer
  | UpdateCustomerSuccess
  | UpdateCustomerFail
  | DeleteCustomer
  | DeleteCustomerSuccess
  | DeleteCustomerFail;
