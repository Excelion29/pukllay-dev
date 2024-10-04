import { Component, OnInit } from '@angular/core';

export interface Product {
  productCode: string;
  productName: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

export interface OrdersInfo {
  orderId: string;             // Identificador de la orden
  customerId: string;         // Identificador del cliente
  purchaseDate: string;       // Fecha de compra (formato: YYYY-MM-DD)
  products: Product[];        // Lista de productos comprados
  totalAmount: number;        // Monto total de la orden
  orderStatus: 'PENDING' | 'COMPLETED'; // Estado de la orden (pendiente o completada)
}

export var ORDERS: OrdersInfo[] = [
  {
    orderId: 'PO-001',
    customerId: 'CUST-001',
    purchaseDate: '2024-10-01',
    products: [
      { productCode: 'PR-1', productName: 'PlayStation 5', quantity: 1, unitPrice: 499.99, totalPrice: 499.99 },
      { productCode: 'PR-4', productName: 'Logitech G502 HERO', quantity: 2, unitPrice: 79.99, totalPrice: 159.98 },
    ],
    totalAmount: 659.97,
    orderStatus: 'COMPLETED',
  },
  {
    orderId: 'PO-002',
    customerId: 'CUST-002',
    purchaseDate: '2024-10-02',
    products: [
      { productCode: 'PR-2', productName: 'Xbox Series X', quantity: 1, unitPrice: 499.99, totalPrice: 499.99 },
      { productCode: 'PR-6', productName: 'Sony WH-1000XM4', quantity: 1, unitPrice: 349.99, totalPrice: 349.99 },
    ],
    totalAmount: 849.98,
    orderStatus: 'PENDING',
  },
  {
    orderId: 'PO-003',
    customerId: 'CUST-003',
    purchaseDate: '2024-10-02',
    products: [
      { productCode: 'PR-3', productName: 'Nintendo Switch', quantity: 1, unitPrice: 299.99, totalPrice: 299.99 },
      { productCode: 'PR-5', productName: 'Razer BlackWidow V3', quantity: 1, unitPrice: 129.99, totalPrice: 129.99 },
      { productCode: 'PR-7', productName: 'Call of Duty: Modern Warfare II', quantity: 1, unitPrice: 59.99, totalPrice: 59.99 },
    ],
    totalAmount: 489.97,
    orderStatus: 'COMPLETED',
  },
  {
    orderId: 'PO-004',
    customerId: 'CUST-004',
    purchaseDate: '2024-10-02',
    products: [
      { productCode: 'PR-8', productName: 'HyperX Cloud II', quantity: 1, unitPrice: 99.99, totalPrice: 99.99 },
    ],
    totalAmount: 99.99,
    orderStatus: 'COMPLETED',
  },
  {
    orderId: 'PO-005',
    customerId: 'CUST-005',
    purchaseDate: '2024-10-03',
    products: [
      { productCode: 'PR-1', productName: 'PlayStation 5', quantity: 1, unitPrice: 499.99, totalPrice: 499.99 },
      { productCode: 'PR-2', productName: 'Xbox Series X', quantity: 1, unitPrice: 499.99, totalPrice: 499.99 },
      { productCode: 'PR-6', productName: 'Sony WH-1000XM4', quantity: 1, unitPrice: 349.99, totalPrice: 349.99 },
    ],
    totalAmount: 1349.97,
    orderStatus: 'PENDING',
  },
  {
    orderId: 'PO-006',
    customerId: 'CUST-006',
    purchaseDate: '2024-10-01',
    products: [
      { productCode: 'PR-9', productName: 'ASUS ROG Strix', quantity: 1, unitPrice: 1399.99, totalPrice: 1399.99 },
    ],
    totalAmount: 1399.99,
    orderStatus: 'COMPLETED',
  },
  {
    orderId: 'PO-007',
    customerId: 'CUST-007',
    purchaseDate: '2024-10-01',
    products: [
      { productCode: 'PR-10', productName: 'Razer Kraken', quantity: 2, unitPrice: 79.99, totalPrice: 159.98 },
    ],
    totalAmount: 159.98,
    orderStatus: 'COMPLETED',
  },
  {
    orderId: 'PO-008',
    customerId: 'CUST-008',
    purchaseDate: '2024-10-03',
    products: [
      { productCode: 'PR-11', productName: 'Samsung Odyssey G5', quantity: 1, unitPrice: 499.99, totalPrice: 499.99 },
      { productCode: 'PR-12', productName: 'Logitech MX Master 3', quantity: 1, unitPrice: 99.99, totalPrice: 99.99 },
    ],
    totalAmount: 599.98,
    orderStatus: 'PENDING',
  },
];

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent implements OnInit {

  orders: OrdersInfo[];
  totalRecords: number = 0; // Total de registros
  rows: number = 10; // Número de filas por página
  page: number = 1; // Página actual
  constructor() { }

  ngOnInit() {
    this.orders = [...ORDERS]; // Asignar todos los productos
  }

  loadOrders(event: any) {
    // Calcular el rango de productos a mostrar
    const start = event.first; // Índice del primer producto
    const end = start + event.rows; // Índice del último producto
    this.orders = ORDERS.slice(start, end); // Cargar los productos para la página actual
    this.totalRecords = ORDERS.length; // Actualizar el total de registros
  }

  getSeverity(status: string) {
    switch (status) {
        case 'PENDING':
            return 'warning';
        case 'COMPLETED':
            return 'success';
    }
  }
}

