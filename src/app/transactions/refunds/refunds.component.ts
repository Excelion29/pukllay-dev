import { Component, OnInit } from '@angular/core';

export interface RefundsInfo {
  refundId: string;           // Identificador único del reembolso
  orderId: string;           // Identificador de la orden asociada al reembolso
  customerId: string;        // Identificador del cliente que solicitó el reembolso
  refundDate: string;        // Fecha en que se solicitó el reembolso
  amount: number;            // Monto del reembolso
  reason: string;            // Razón por la cual se solicitó el reembolso
  status: 'CANCELLED' | 'FAILED'; // Estado del reembolso
}

export var REFUNDS: RefundsInfo[] = [
  {
    refundId: "REF#001",
    orderId: "ORD#005",
    customerId: "CUST#001",
    refundDate: "2023-06-15",
    amount: 49.99,
    reason: "Producto defectuoso",
    status: "CANCELLED"
  },
  {
    refundId: "REF#002",
    orderId: "ORD#007",
    customerId: "CUST#002",
    refundDate: "2023-07-20",
    amount: 29.99,
    reason: "Error en el pedido",
    status: "CANCELLED"
  },
  {
    refundId: "REF#003",
    orderId: "ORD#008",
    customerId: "CUST#003",
    refundDate: "2023-08-10",
    amount: 59.99,
    reason: "Cambio de opinión",
    status: "CANCELLED"
  },
  {
    refundId: "REF#004",
    orderId: "ORD#010",
    customerId: "CUST#001",
    refundDate: "2023-09-05",
    amount: 15.99,
    reason: "No entregado a tiempo",
    status: "FAILED"
  },
  {
    refundId: "REF#005",
    orderId: "ORD#012",
    customerId: "CUST#002",
    refundDate: "2023-09-12",
    amount: 45.00,
    reason: "Problema con el método de pago",
    status: "FAILED"
  },
  {
    refundId: "REF#006",
    orderId: "ORD#013",
    customerId: "CUST#003",
    refundDate: "2023-09-15",
    amount: 99.99,
    reason: "Cancelación por parte del cliente",
    status: "CANCELLED"
  },
  {
    refundId: "REF#007",
    orderId: "ORD#014",
    customerId: "CUST#001",
    refundDate: "2023-09-20",
    amount: 75.00,
    reason: "Producto no conforme",
    status: "CANCELLED"
  },
  {
    refundId: "REF#008",
    orderId: "ORD#015",
    customerId: "CUST#002",
    refundDate: "2023-09-22",
    amount: 120.00,
    reason: "Doble cargo en la cuenta",
    status: "FAILED"
  }
];

@Component({
  selector: 'app-refunds',
  templateUrl: './refunds.component.html',
  styleUrl: './refunds.component.css'
})
export class RefundsComponent implements OnInit {

  refunds: RefundsInfo[];
  totalRecords: number = 0; // Total de registros
  rows: number = 10; // Número de filas por página
  page: number = 1; // Página actual
  constructor() { }

  ngOnInit() {
    this.refunds = [...REFUNDS]; // Asignar todos los productos
  }
  
  loadRefunds(event: any) {
    // Calcular el rango de productos a mostrar
    const start = event.first; // Índice del primer producto
    const end = start + event.rows; // Índice del último producto
    this.refunds = REFUNDS.slice(start, end); // Cargar los productos para la página actual
    this.totalRecords = REFUNDS.length; // Actualizar el total de registros
  }
  getSeverity(status: string) {
    switch (status) {
        case 'CANCELLED':
            return 'warning';
        case 'FAILED':
            return 'danger';
    }
  }

}
