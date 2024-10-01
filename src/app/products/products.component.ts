import { Component, OnInit } from '@angular/core';

declare interface ProductInfo {
  id?: string;
  code?: string;
  name?: string;
  description?: string;
  price?: number;
  quantity?: number;
  inventoryStatus?: string;
  category?: string;
  src?: string;
  rating?: number;
  currency?: string;
}

export var PRODUCTS: ProductInfo[] = [
  { 
    id : '1',
    code : 'PR-1',
    name: 'PlayStation 5',
    description: 'Consola de última generación con gráficos 4K y retrocompatibilidad.',
    price: 499.99,
    quantity: 10,
    inventoryStatus: 'INSTOCK',
    category: 'Console',
    src: 'https://m.media-amazon.com/images/I/619BkvKW35L._AC_SL1500_.jpg',
    currency: 'USD',
    rating: 5
  },
  { 
    id : '2',
    code : 'PR-2',
    name: 'Xbox Series X',
    description: 'La consola más potente de Microsoft con rendimiento 4K y juegos en la nube.',
    price: 499.99,
    quantity: 8,
    inventoryStatus: 'INSTOCK',
    category: 'Console',
    src: 'https://m.media-amazon.com/images/I/71NBQ2a52CL._AC_SL1500_.jpg',
    currency: 'USD',
    rating: 5
  },
  { 
    id : '3',
    code : 'PR-3',
    name: 'Nintendo Switch',
    description: 'Consola híbrida que puedes usar como portátil o conectada a la TV.',
    price: 299.99,
    quantity: 15,
    inventoryStatus: 'INSTOCK',
    category: 'Console',
    src: 'https://m.media-amazon.com/images/I/61-PblYntsL._AC_SL1500_.jpg',
    currency: 'USD',
    rating: 4
  },
  { 
    id : '4',
    code : 'PR-4',
    name: 'The Legend of Zelda: Breath of the Wild',
    description: 'Juego de aventura y exploración en mundo abierto para Nintendo Switch.',
    price: 59.99,
    quantity: 20,
    inventoryStatus: 'INSTOCK',
    category: 'Game',
    src: 'https://m.media-amazon.com/images/I/81KGkvKW35L._SL1500_.jpg',
    currency: 'USD',
    rating: 5
  },
  { 
    id : '5',
    code : 'PR-5',
    name: 'FIFA 24',
    description: 'El juego de fútbol más popular con modos de juego online y offline.',
    price: 59.99,
    quantity: 30,
    inventoryStatus: 'INSTOCK',
    category: 'Game',
    src: 'https://m.media-amazon.com/images/I/81yRP1uOksL._AC_SL1500_.jpg',
    currency: 'USD',
    rating: 4
  },
  { 
    id : '6',
    code : 'PR-6',
    name: 'DualSense Wireless Controller',
    description: 'Controlador inalámbrico para PlayStation 5 con respuesta háptica avanzada.',
    price: 69.99,
    quantity: 50,
    inventoryStatus: 'INSTOCK',
    category: 'Accessory',
    src: 'https://m.media-amazon.com/images/I/61oNgFTpu5L._AC_SL1500_.jpg',
    currency: 'USD',
    rating: 5
  },
  { 
    id : '7',
    code : 'PR-7',
    name: 'Xbox Wireless Controller',
    description: 'Controlador inalámbrico para Xbox Series X y S con gran durabilidad.',
    price: 59.99,
    quantity: 40,
    inventoryStatus: 'INSTOCK',
    category: 'Accessory',
    src: 'https://m.media-amazon.com/images/I/61OtU9wX7PL._AC_SL1500_.jpg',
    currency: 'USD',
    rating: 4
  },
  { 
    id : '8',
    code : 'PR-8',
    name: 'Gaming Headset',
    description: 'Auriculares para gaming con sonido envolvente y micrófono integrado.',
    price: 79.99,
    quantity: 25,
    inventoryStatus: 'OUTOFSTOCK',
    category: 'Accessory',
    src: 'https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_SL1500_.jpg',
    currency: 'USD',
    rating: 4
  },
  { 
    id : '9',
    code : 'PR-9',
    name: 'PlayStation Plus 12 Months',
    description: 'Suscripción de un año a PlayStation Plus, acceso a juegos online y más.',
    price: 59.99,
    quantity: 100,
    inventoryStatus: 'INSTOCK',
    category: 'Service',
    src: 'https://m.media-amazon.com/images/I/81NyBqVt7sL._SL1500_.jpg',
    currency: 'USD',
    rating: 5
  },
  { 
    id : '10',
    code : 'PR-10',
    name: 'Nintendo Switch Pro Controller',
    description: 'Controlador premium para Nintendo Switch con un diseño ergonómico.',
    price: 69.99,
    quantity: 12,
    inventoryStatus: 'INSTOCK',
    category: 'Accessory',
    src: 'https://m.media-amazon.com/images/I/61drpi3cYUL._AC_SL1500_.jpg',
    currency: 'USD',
    rating: 4
  }
];


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
  
export class ProductsComponent implements OnInit {

  products: ProductInfo[];
  totalRecords: number = 0; // Total de registros
  rows: number = 10; // Número de filas por página
  page: number = 1; // Página actual
  
  constructor() { }

  ngOnInit() {
    this.products = [...PRODUCTS]; // Asignar todos los productos
  }
  
  loadProducts(event: any) {
    // Calcular el rango de productos a mostrar
    const start = event.first; // Índice del primer producto
    const end = start + event.rows; // Índice del último producto
    this.products = PRODUCTS.slice(start, end); // Cargar los productos para la página actual
    this.totalRecords = PRODUCTS.length; // Actualizar el total de registros
  }
  getSeverity(status: string) {
    switch (status) {
        case 'INSTOCK':
            return 'success';
        case 'LOWSTOCK':
            return 'warning';
        case 'OUTOFSTOCK':
            return 'danger';
    }
}
}