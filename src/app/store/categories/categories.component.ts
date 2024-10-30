import { Component, inject, OnInit } from '@angular/core';
import { Category } from '../../core/models/Category';
import { CategoryService } from '../../core/services/category.service';

import { ModalCategoriesComponent } from './modal-categories/modal-categories.component';
import { ModalCategoriesService } from './modal-categories/modal-categories.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  private readonly _modalCategory = inject(ModalCategoriesService);
  categories: Category[] = [];
  allCategories: Category[] = [];
  totalRecords: number = 0;
  rows: number = 10;
  page: number = 1;

  onClickNewCategory(): void {
    this._modalCategory.openModal<ModalCategoriesComponent>(ModalCategoriesComponent);
  }

  constructor(private categoryService:CategoryService) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getCategories().subscribe(
      (data: Category[]) => {
        this.allCategories = data; // Almacena todas las categorías
        this.totalRecords = data.length; // Actualiza el total de registros
        this.loadCategories({ first: 0, rows: this.rows }); // Carga la primera página de categorías
        console.log('Categorías cargadas:', this.allCategories); // Verifica los datos en la consola
      },
      (error) => {
        console.error('Error al cargar categorías:', error); // Maneja el error
      }
    );
  }

  loadCategories(event: any) {
    // Calcular el rango de categorías a mostrar
    const start = event.first; // Índice del primer producto
    const end = start + event.rows; // Índice del último producto
    this.categories = this.allCategories.slice(start, end); // Cargar las categorías para la página actual
  }

  getSeverity(status: boolean) {
    switch (status) {
        case true:
            return 'success';
        case false:
            return 'secondary';
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
