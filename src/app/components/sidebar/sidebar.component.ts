import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
    path?: string;
    title: string;
    icon: string;
    class: string;
    children?: RouteInfo[];
    expanded?: boolean;
}

export const ROUTES: RouteInfo[] = [
  {
    path: '/dashboard',
    title: 'Reportes',
    icon: 'business_chart-bar-32',
    class: ''
  },
  {
    title: 'Tienda',
    icon: 'shopping_shop',
    class: '',
    children: [
      { path: '/products', title: 'Productos', icon: 'shopping_basket', class: '' },
      { path: '/categories', title: 'Categorías', icon: 'business_chart-pie-36', class: '' },
      { path: '/brands', title: 'Marcas', icon: 'business_chart-pie-36', class: '' },
      { path: '/special-offers', title: 'Ofertas Especiales', icon: 'business_bulb-63', class: '' }
    ],
    expanded: false
  },
  {
    title: 'Gestión de Pedidos',
    icon: 'business_money-coins',
    class: '',
    children: [
      { path: '/orders', title: 'Todos los Pedidos', icon: 'files_box', class: '' },
      { path: '/pending-orders', title: 'Pedidos Pendientes', icon: 'files_box', class: '' },
      { path: '/completed-orders', title: 'Pedidos Completados', icon: 'files_box', class: '' },
      { path: '/returns', title: 'Devoluciones y Reembolsos', icon: 'files_box', class: '' }
    ],
    expanded: false
  },
  {
    title: 'Clientes',
    icon: 'users_single-02',
    class: '',
    children: [
      { path: '/customers', title: 'Todos los Clientes', icon: 'users_single-02', class: '' },
      { path: '/active-customers', title: 'Clientes Activos', icon: 'users_single-02', class: '' },
      { path: '/inactive-customers', title: 'Clientes Inactivos', icon: 'users_single-02', class: '' }
    ],
    expanded: false
  },
  {
    path: '/marketing',
    title: 'Marketing',
    icon: 'education_paper',
    class: ''
  },
  {
    path: '/reports',
    title: 'Informes',
    icon: 'education_paper',
    class: ''
  },
  {
    title: 'Configuración',
    icon: 'ui-2_settings-90',
    class: '',
    children: [
      { path: '/payment-methods', title: 'Métodos de Pago', icon: 'shopping_credit-card', class: '' },
      { path: '/shipping-options', title: 'Opciones de Envío', icon: 'sport_user-run', class: '' },
      { path: '/general-settings', title: 'Configuración General', icon: 'ui-1_settings-gear-63', class: '' }
    ],
    expanded: false
  },
  {
    path: '/user-management',
    title: 'Administración de Usuarios',
    icon: 'users_single-02',
    class: ''
  },
  {
    path: '/customer-support',
    title: 'Atención al Cliente',
    icon: 'users_single-02',
    class: ''
  },
  {
    path: '/system-settings',
    title: 'Configuración del Sistema',
    icon: 'ui-2_settings-90',
    class: ''
  },
];


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: RouteInfo[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

  // Método para alternar el estado del menú
  toggleMenu(menuItem) {
    menuItem.expanded = !menuItem.expanded;
  }
}
