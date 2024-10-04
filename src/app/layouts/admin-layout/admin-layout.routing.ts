import { Routes } from '@angular/router';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { ProductsComponent } from '../../store/products/products.component';
import { CategoriesComponent } from '../../store/categories/categories.component';
import { BrandsComponent } from '../../store/brands/brands.component';
import { InternalUsersComponent } from '../../accounts/internal-users/internal-users.component';
import { CustomersComponent } from '../../accounts/customers/customers.component';
import { OrdersComponent } from '../../transactions/orders/orders.component';
import { RefundsComponent } from '../../transactions/refunds/refunds.component';
import { AuthGuard } from '../../auth/auth.guard';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent , canActivate: [AuthGuard] },

    //!Tienda---------------------------------------------------
    { path: 'products', component: ProductsComponent , canActivate: [AuthGuard] },
    { path: 'categories', component: CategoriesComponent, canActivate: [AuthGuard] },
    { path: 'brands', component: BrandsComponent , canActivate: [AuthGuard] },
    //!---------------------------------------------------------

    
    //!Pedidos--------------------------------------------------
    { path: 'orders', component: OrdersComponent , canActivate: [AuthGuard] },
    { path: 'refunds', component: RefundsComponent , canActivate: [AuthGuard] },
    //!---------------------------------------------------------


    //!Reportes-------------------------------------------------
    // { path: 'orders',       component: OrdersComponent },
    //!---------------------------------------------------------

    
    //!Clientes-------------------------------------------------
    { path: 'customers', component: CustomersComponent , canActivate: [AuthGuard] },
    { path: 'internal-users', component: InternalUsersComponent , canActivate: [AuthGuard] },
    //!---------------------------------------------------------
    // { path: 'user-profile',   component: UserProfileComponent },
    // { path: 'table-list',     component: TableListComponent },
    // { path: 'typography',     component: TypographyComponent },
    // { path: 'icons',          component: IconsComponent },
    // { path: 'maps',           component: MapsComponent },
    // { path: 'notifications',  component: NotificationsComponent },
    // { path: 'upgrade',        component: UpgradeComponent }
];
