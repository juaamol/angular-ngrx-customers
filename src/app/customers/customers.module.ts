import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer/customer.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { StoreModule } from '@ngrx/store';
import { customerReducer } from './state/customer.reducer';

const customerRoutes: Routes = [{ path: '', component: CustomerComponent }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(customerRoutes),
    StoreModule.forFeature('customers', customerReducer),
  ],
  declarations: [CustomerComponent, CustomerAddComponent, CustomerEditComponent, CustomerListComponent]
})
export class CustomersModule { }
