import { Component, OnInit } from '@angular/core';

export interface Address {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

export interface CustomersInfo {
  customerId: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: Address;
  status: boolean;
  accountType: string;
  registrationDate: string;
}

export const CUSTOMERS: CustomersInfo[] = [
  {
    customerId: "CUST#001",
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phoneNumber: "+1-555-1234",
    address: {
      street: "123 Elm St",
      city: "Springfield",
      state: "IL",
      postalCode: "62701",
      country: "USA"
    },
    status: true,
    accountType: "Regular",
    registrationDate: "2023-05-12"
  },
  {
    customerId: "CUST#002",
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com",
    phoneNumber: "+1-555-5678",
    address: {
      street: "456 Maple St",
      city: "Metropolis",
      state: "NY",
      postalCode: "10001",
      country: "USA"
    },
    status: false,
    accountType: "Premium",
    registrationDate: "2022-11-30"
  },
  {
    customerId: "CUST#003",
    firstName: "Carlos",
    lastName: "García",
    email: "carlos.garcia@example.com",
    phoneNumber: "+51-987654321",
    address: {
      street: "Av. Los Libertadores 123",
      city: "Lima",
      state: "Lima",
      postalCode: "15001",
      country: "Perú"
    },
    status: true,
    accountType: "Regular",
    registrationDate: "2024-01-15"
  }
];

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent implements OnInit {

  customers: CustomersInfo[];
  totalRecords: number = 0; // Total de registros
  rows: number = 10; // Número de filas por página
  page: number = 1; // Página actual
  constructor() { }

  ngOnInit() {
    this.customers = [...CUSTOMERS]; // Asignar todos los productos
  }

  loadAccounts(event: any) {
    // Calcular el rango de productos a mostrar
    const start = event.first; // Índice del primer producto
    const end = start + event.rows; // Índice del último producto
    this.customers = CUSTOMERS.slice(start, end); // Cargar los productos para la página actual
    this.totalRecords = CUSTOMERS.length; // Actualizar el total de registros
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
