import { Component, Inject, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogActions, MatDialogContent, MatDialogModule, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { CategoryService } from '../../../core/services/category.service';
import { MatOption } from '@angular/material/core';
import { ModalCategoriesService } from './modal-categories.service';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';


const MATERIAL_MODULES = [MatLabel,MatFormField,MatDialogContent,MatInput,MatDialogTitle,MatDialogActions,MatDialogModule,MatOption];

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

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ModalCategoriesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private categoryService: CategoryService,
    private messageService: MessageService
  ) { }

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
    this._buildForm();
  }
  // categoryForm.get('categoryTitle').value;

  async onSubmit() {
    if (this.categoryForm.invalid) {
      return;
    }

    let message = 'Categoría actualizada';

    this.categoryService.createCategroy(this.categoryForm.value).subscribe(
      (response) => {
        console.log('Categoría creada:', response);
        this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Categoría creada exitosamente' });
        this.dialogRef.close({ success: true });
      },
      (error) => {
        console.error('Error al crear categoría:', error);
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al crear categoría' });
        this.dialogRef.close({ success: false });
      }
    );
  }
  getTitle(): string {
    return this.data ? 'Editar categoría' : 'Nueva categoría';
  }



    // if (this.categoryForm.invalid) {
    //   return;
    // }
    // const category = this.categoryForm.value;
    // console.log('Categoría:', category);

}
