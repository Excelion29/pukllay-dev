import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';

import { ProductsComponent } from '../../store/products/products.component';
import { CategoriesComponent } from '../../store/categories/categories.component';
import { BrandsComponent } from '../../store/brands/brands.component';
import { InternalUsersComponent } from '../../accounts/internal-users/internal-users.component';
import { CustomersComponent } from '../../accounts/customers/customers.component';
import { OrdersComponent } from '../../transactions/orders/orders.component';
import { RefundsComponent } from '../../transactions/refunds/refunds.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },

    //!Tienda---------------------------------------------------
    { path: 'products',       component: ProductsComponent },
    { path: 'categories',     component: CategoriesComponent },
    { path: 'brands',     component: BrandsComponent },
    //!---------------------------------------------------------

    
    //!Pedidos--------------------------------------------------
    { path: 'orders',       component: OrdersComponent },
    { path: 'refunds',     component: RefundsComponent },
    //!---------------------------------------------------------


    //!Reportes-------------------------------------------------
    // { path: 'orders',       component: OrdersComponent },
    //!---------------------------------------------------------

    
    //!Clientes-------------------------------------------------
    { path: 'customers',       component: CustomersComponent },
    { path: 'internal-users',       component: InternalUsersComponent },
    //!---------------------------------------------------------
    // { path: 'user-profile',   component: UserProfileComponent },
    // { path: 'table-list',     component: TableListComponent },
    // { path: 'typography',     component: TypographyComponent },
    // { path: 'icons',          component: IconsComponent },
    // { path: 'maps',           component: MapsComponent },
    // { path: 'notifications',  component: NotificationsComponent },
    // { path: 'upgrade',        component: UpgradeComponent }
];
