import { Component, Inject, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogActions, MatDialogContent, MatDialogModule, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { CategoryService } from '../../../core/services/category.service';
import { MatButton } from '@angular/material/button';
import { Category, CategoryRequest } from '../../../core/models/Category';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';



const MATERIAL_MODULES = [MatLabel,MatFormField,MatDialogContent,MatInput,MatDialogTitle,MatDialogActions,MatDialogModule,MatButton];

@Component({
  selector: 'app-modal-categories',
  standalone: true,
  imports: [ReactiveFormsModule,MATERIAL_MODULES,ToastModule],
  providers: [MessageService],
  templateUrl: './modal-categories.component.html',
  styleUrl: './modal-categories.component.scss'
})
export class ModalCategoriesComponent implements OnInit {
  categoryForm: FormGroup;
  isEditMode: boolean = false;
  titleModal:string = '';

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ModalCategoriesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Category | null,
    private categoryService: CategoryService,
    private messageService: MessageService
  ) {}

  private _buildForm(): void {
    this.categoryForm = this.fb.group({
      categoryTitle: ['', Validators.required],
      categoryStatus: [true, Validators.required]
    });

    // If editing an existing category, populate the form with the existing data
    if (this.data) {
      this.categoryForm.patchValue(this.data);
    }
  }

  ngOnInit(): void {
    this.categoryForm = this.fb.group({
      categoryTitle: ['', Validators.required],
      categoryStatus: [true, Validators.required]
    });

    if (this.data) {
      this.isEditMode = true;
      this.categoryForm.patchValue({
        categoryTitle: this.data.title,
        categoryStatus: this.data.status
      });
    }

    if (this.isEditMode) {
      this.titleModal = 'Editar categoría';
    }else{
      this.titleModal = 'Crear categoría';
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  async onSubmit() {
    if (this.categoryForm.invalid) {
      return;
    }

    let message = 'Categoría actualizada';
    if (this.categoryForm.valid) {
      const category_val = {
        ...this.categoryForm.value,
        category_id: this.data ? this.data.id : null,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      };

      if (this.isEditMode) {
        this.updateCategory(category_val);
      } else {
        this.createCategory(category_val);
      }
    } else {
      console.log('Formulario inválido');
    }
  }

  createCategory(category: Partial<CategoryRequest>): void {
    this.categoryService.createCategory(category).subscribe(
      (response) => {
        console.log('Categoría creada:', response);
        this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Categoría creada exitosamente' });
        this.dialogRef.close({ success: true });
      },
      (error) => {
        console.error('Error al crear categoría:', error);
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al crear categoría' });
        // this.dialogRef.close({ success: false });
      }
    );
  }

  updateCategory(category: CategoryRequest): void {
    console.log(category);
    this.categoryService.updatedCategory(category).subscribe(
      (response) => {
        this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Categoría actualizada exitosamente' });
        this.dialogRef.close({ success: true });
      },
      (error) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al actualizar categoría' });
      }
    );
  }

}
