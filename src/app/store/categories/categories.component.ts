import { Component, OnInit } from '@angular/core';

declare interface CategoriesInfo {
  categoryCode?: string;
  categoryTitle?: string;
  categoryDescription?: string;
  categoryIco?: string;
  CategoryStatus? : boolean;
}

export var CATEGORIES: CategoriesInfo[] = [
  {
    categoryCode: 'CAT#01',
    categoryTitle: 'Videojuegos',
    categoryDescription: 'Encuentra una amplia variedad de videojuegos para todas las plataformas, desde los clásicos hasta los últimos lanzamientos.',
    categoryIco: 'https://w7.pngwing.com/pngs/194/649/png-transparent-video-game-illustration.png', // Icono de un mando de videojuego
    CategoryStatus: true
  },
  {
    categoryCode: 'CAT#02',
    categoryTitle: 'Consolas',
    categoryDescription: 'Compra las últimas consolas de videojuegos como PlayStation, Xbox y Nintendo Switch, así como ediciones especiales.',
    categoryIco: 'https://cdn-icons-png.flaticon.com/512/10069/10069151.png', // Icono de una consola de videojuegos
    CategoryStatus: true
  },
  {
    categoryCode: 'CAT#03',
    categoryTitle: 'Accesorios para Consolas',
    categoryDescription: 'Accesorios imprescindibles para mejorar tu experiencia de juego, como controles, auriculares, cargadores y más.',
    categoryIco: 'https://ouch-cdn2.icons8.com/ubDzlgWeXNxJWzuPjgUB5s4Rgm4MT1-JQhKdKfa5PWo/rs:fit:456:456/extend:true/wm:1:re:0:0:0.8/wmid:ouch/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvOTAw/L2FkYzhmNzhhLWFj/NjQtNDQwNy05NGNi/LThmMGViMmY0YmYx/YS5zdmc.png', // Icono de un accesorio de consola (control)
    CategoryStatus: true
  },
  {
    categoryCode: 'CAT#04',
    categoryTitle: 'Merchandising',
    categoryDescription: 'Productos oficiales de tus juegos favoritos, como figuras, camisetas, posters y otros artículos de colección.',
    categoryIco: 'https://cdn-icons-png.flaticon.com/512/1779/1779820.png', // Icono de una camiseta de merchandising
    CategoryStatus: false
  }
];

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: CategoriesInfo[];
  totalRecords: number = 0;
  rows: number = 10;
  page: number = 1;

  constructor() { }

  ngOnInit() {
    this.categories = [...CATEGORIES]; // Asignar todos los productos
  }

  loadCategories(event: any) {
    // Calcular el rango de productos a mostrar
    const start = event.first; // Índice del primer producto
    const end = start + event.rows; // Índice del último producto
    this.categories = CATEGORIES.slice(start, end); // Cargar los productos para la página actual
    this.totalRecords = CATEGORIES.length; // Actualizar el total de registros
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
