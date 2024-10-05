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
      { path: '/providers', title: 'Proveedores', icon: 'business_chart-pie-36', class: '' }
    ],
    expanded: false
  },
  {
    title: 'Gestión de Pedidos',
    icon: 'business_money-coins',
    class: '',
    children: [
      { path: '/orders', title: 'Pedidos', icon: 'files_box', class: '' },
      { path: '/refunds', title: 'Reembolsos', icon: 'files_box', class: '' }
    ],
    expanded: false
  },
  {
    title: 'Gestión de Cuentas',
    icon: 'users_single-02',
    class: '',
    children: [
      { path: '/customers', title: 'Clientes', icon: 'users_single-02', class: '' },
      { path: '/internal-users', title: 'Cuentas Internas', icon: 'users_single-02', class: '' },
    ],
    expanded: false
  }
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
