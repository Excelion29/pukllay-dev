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
    productCode: 'PR-1',
    productName: 'PlayStation 5',
    productDescription: 'Consola de última generación con gráficos 4K y retrocompatibilidad.',
    productPrice: 499.99,
    productQuantity: 10,
    productInventoryStatus: 'INSTOCK',
    productCategory: 'Consola',
    productImage: 'https://m.media-amazon.com/images/I/619BkvKW35L._AC_SL1500_.jpg',
    productRating: 5,
    productCurrency: 'PEN'
  },
  { 
    productCode: 'PR-2',
    productName: 'Xbox Series X',
    productDescription: 'La consola más potente de Microsoft, con capacidad de 4K y juegos en alta velocidad.',
    productPrice: 499.99,
    productQuantity: 8,
    productInventoryStatus: 'INSTOCK',
    productCategory: 'Consola',
    productImage: 'https://m.media-amazon.com/images/I/91g52hIn7NL._AC_SL1500_.jpg',
    productRating: 4.8,
    productCurrency: 'PEN'
  },
  { 
    productCode: 'PR-3',
    productName: 'Nintendo Switch',
    productDescription: 'Consola híbrida que combina juego en casa y en movilidad.',
    productPrice: 299.99,
    productQuantity: 15,
    productInventoryStatus: 'INSTOCK',
    productCategory: 'Consola',
    productImage: 'https://m.media-amazon.com/images/I/61G7pyt1VkL._AC_SL1000_.jpg',
    productRating: 4.7,
    productCurrency: 'PEN'
  },
  { 
    productCode: 'PR-4',
    productName: 'Logitech G502 HERO',
    productDescription: 'Mouse para gaming con sensor HERO de alta precisión y diseño ergonómico.',
    productPrice: 79.99,
    productQuantity: 25,
    productInventoryStatus: 'INSTOCK',
    productCategory: 'Accesorios',
    productImage: 'https://m.media-amazon.com/images/I/71p7v8VpKhL._AC_SL1500_.jpg',
    productRating: 4.9,
    productCurrency: 'PEN'
  },
  { 
    productCode: 'PR-5',
    productName: 'Razer BlackWidow V3',
    productDescription: 'Teclado mecánico para gaming con retroiluminación RGB y switch mecánicos.',
    productPrice: 129.99,
    productQuantity: 20,
    productInventoryStatus: 'INSTOCK',
    productCategory: 'Accesorios',
    productImage: 'https://m.media-amazon.com/images/I/81zH5Gp7w7L._AC_SL1500_.jpg',
    productRating: 4.6,
    productCurrency: 'PEN'
  },
  { 
    productCode: 'PR-6',
    productName: 'Sony WH-1000XM4',
    productDescription: 'Auriculares inalámbricos con cancelación de ruido y calidad de sonido superior.',
    productPrice: 349.99,
    productQuantity: 12,
    productInventoryStatus: 'INSTOCK',
    productCategory: 'Accesorios',
    productImage: 'https://m.media-amazon.com/images/I/71AGsC8S8wL._AC_SL1500_.jpg',
    productRating: 4.8,
    productCurrency: 'PEN'
  },
  { 
    productCode: 'PR-7',
    productName: 'Call of Duty: Modern Warfare II',
    productDescription: 'Juego de disparos en primera persona con gráficos impresionantes y modo multijugador.',
    productPrice: 59.99,
    productQuantity: 50,
    productInventoryStatus: 'INSTOCK',
    productCategory: 'Videojuegos',
    productImage: 'https://m.media-amazon.com/images/I/81tJ9hHqG9L._AC_SL1500_.jpg',
    productRating: 4.5,
    productCurrency: 'PEN'
  },
  { 
    productCode: 'PR-8',
    productName: 'The Legend of Zelda: Breath of the Wild',
    productDescription: 'Juego de aventura y exploración en un mundo abierto lleno de sorpresas.',
    productPrice: 59.99,
    productQuantity: 30,
    productInventoryStatus: 'INSTOCK',
    productCategory: 'Videojuegos',
    productImage: 'https://m.media-amazon.com/images/I/71I4WInbmML._AC_SL1500_.jpg',
    productRating: 4.9,
    productCurrency: 'PEN'
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