import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { BaseChartDirective  } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { SharedModule } from '../shared/shared.module';



import { ProductsComponent } from '../../store/products/products.component';
import { CategoriesComponent } from '../../store/categories/categories.component';
import { BrandsComponent } from '../../store/brands/brands.component';
import { CustomersComponent } from '../../accounts/customers/customers.component';
import { InternalUsersComponent } from '../../accounts/internal-users/internal-users.component';
import { OrdersComponent } from '../../transactions/orders/orders.component';
import { RefundsComponent } from '../../transactions/refunds/refunds.component';
import { ProvidersComponent } from '../../store/providers/providers.component';
import { CreateComponent as ProductCreateComponent } from '../../store/products/create/create.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    BaseChartDirective,
    NgbModule,
    ToastrModule.forRoot()
  ],
  declarations: [
    DashboardComponent,

    //!Tienda---------------------------
    ProductsComponent,
    ProductCreateComponent,
    CategoriesComponent,
    BrandsComponent,
    ProvidersComponent,
    //!---------------------------------

    //!Ordenes--------------------------
    OrdersComponent,
    RefundsComponent,
    //!---------------------------------

    //!Cuentas--------------------------
    CustomersComponent,
    InternalUsersComponent
    //!---------------------------------
  ]
})

export class AdminLayoutModule {}
