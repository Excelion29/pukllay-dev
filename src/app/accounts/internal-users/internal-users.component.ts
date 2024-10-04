import { Component, OnInit } from '@angular/core';

export interface InternalAddress {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

export interface InternalUsersInfo {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  department: string; // Administración, Ventas, Facturación, Soporte, etc.
  role: string; // Rol del usuario: Admin, Supervisor, Soporte, Almacén, etc.
  status: boolean; // Activo o Inactivo
  address: InternalAddress;
  registrationDate: string;
}

export const INTERNALUSERS: InternalUsersInfo[] = [
  {
    userId: "INT#001",
    firstName: "Laura",
    lastName: "Martínez",
    email: "laura.martinez@empresa.com",
    phoneNumber: "+1-555-9876",
    department: "Administración",
    role: "Admin",
    status: true,
    address: {
      street: "Av. Principal 123",
      city: "Madrid",
      state: "Madrid",
      postalCode: "28001",
      country: "España"
    },
    registrationDate: "2021-06-15"
  },
  {
    userId: "INT#002",
    firstName: "Carlos",
    lastName: "Pérez",
    email: "carlos.perez@empresa.com",
    phoneNumber: "+1-555-3456",
    department: "Ventas",
    role: "Supervisor",
    status: true,
    address: {
      street: "Calle Secundaria 456",
      city: "Barcelona",
      state: "Cataluña",
      postalCode: "08001",
      country: "España"
    },
    registrationDate: "2022-02-10"
  },
  {
    userId: "INT#003",
    firstName: "Ana",
    lastName: "Rodríguez",
    email: "ana.rodriguez@empresa.com",
    phoneNumber: "+1-555-7654",
    department: "Soporte",
    role: "Almacén",
    status: false,
    address: {
      street: "Av. Industrial 789",
      city: "Valencia",
      state: "Valencia",
      postalCode: "46001",
      country: "España"
    },
    registrationDate: "2020-10-22"
  }
];

@Component({
  selector: 'app-internal-users',
  templateUrl: './internal-users.component.html',
  styleUrl: './internal-users.component.css'
})
export class InternalUsersComponent implements OnInit {

  internal_users: InternalUsersInfo[];
  totalRecords: number = 0; // Total de registros
  rows: number = 10; // Número de filas por página
  page: number = 1; // Página actual
  constructor() { }

  ngOnInit() {
    this.internal_users = [...INTERNALUSERS]; // Asignar todos los productos
  }

  loadAccounts(event: any) {
    // Calcular el rango de productos a mostrar
    const start = event.first; // Índice del primer producto
    const end = start + event.rows; // Índice del último producto
    this.internal_users = INTERNALUSERS.slice(start, end); // Cargar los productos para la página actual
    this.totalRecords = INTERNALUSERS.length; // Actualizar el total de registros
  }
  getSeverity(status: boolean) {
    switch (status) {
        case true:
            return 'success';
        case false:
            return 'danger';
    }
  }
  getText(status: boolean) {
    switch (status) {
        case true:
            return 'HABILITADO';
        case false:
            return 'DESHABILITADO';
    }
  }
}
