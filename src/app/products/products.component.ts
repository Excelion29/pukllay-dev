import { Component, OnInit } from '@angular/core';

declare interface ProductInfo {
  productCode?: string;
  productName?: string;
  productDescription?: string;
  productPrice?: number;
  productQuantity?: number;
  productInventoryStatus?: string;
  productCategory?: string;
  productImage?: string;
  productRating?: number;
  productCurrency?: string;
}

export var PRODUCTS: ProductInfo[] = [
  { 
    productCode : 'PR-1',
    productName : 'PlayStation 5',
    productDescription : 'Consola de última generación con gráficos 4K y retrocompatibilidad.',
    productPrice : 499.99,
    productQuantity : 10,
    productInventoryStatus : 'INSTOCK',
    productCategory : 'Consola',
    productImage : 'https://m.media-amazon.com/images/I/619BkvKW35L._AC_SL1500_.jpg',
    productRating : 5,
    productCurrency : 'PEN'
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