import { Component, inject, OnInit } from '@angular/core';
import { Category, CategoryResponse } from '../../core/models/Category';
import { CategoryService } from '../../core/services/category.service';
import { ModalCategoriesComponent } from './modal-categories/modal-categories.component';
import { ModalCategoriesService } from './modal-categories/modal-categories.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AlertDialogComponent } from '../../templates/alert-dialog/alert-dialog.component';


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

  constructor(private categoryService:CategoryService,
    private dialog: MatDialog,
  ) { }

  onClickNewCategory(): void {
    const dialogRef = this.dialog.open(ModalCategoriesComponent, {
      width: '400px',
      data: null // No se pasa ningún dato para crear una nueva categoría
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.success) {
        this.getCategories(); // Recarga las categorías después de crear una nueva
      }
    });
  }

  onClickEditCategory(category: Category): void {
    const dialogRef = this.dialog.open(ModalCategoriesComponent, {
      width: '400px',
      data: category // Se pasa el objeto categoría para editar
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.success) {
        this.getCategories(); // Recarga las categorías después de editar una categoría
      }
    });
  }

  onClickDeleteCategory(category_id: number): void {
    const dialogRef = this.dialog.open(AlertDialogComponent,{
      data: { category_id }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.categoryService.deletedCategory(category_id).subscribe(() => {
          this.getCategories();
        });
      }

      this.ngOnInit();
    });
  }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getCategories().subscribe(
      (data: CategoryResponse) => {
        this.allCategories = data.categories;
        this.totalRecords = data.pagination.total;
        this.loadCategories({ first: 0, rows: this.rows });
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
