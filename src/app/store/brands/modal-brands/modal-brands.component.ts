import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogContent, MatDialogModule, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { Brand, BrandRequest } from '../../../core/models/Brands';
import { BrandService } from '../../../core/services/brand.service';


const MATERIAL_MODULES = [MatLabel,MatFormField,MatDialogContent,MatInput,MatDialogTitle,MatDialogActions,MatDialogModule,MatButton,ReactiveFormsModule,ToastModule];

@Component({
  selector: 'app-modal-brands',
  standalone: true,
  imports: [MATERIAL_MODULES],
  templateUrl: './modal-brands.component.html',
  styleUrl: './modal-brands.component.scss'
})
export class ModalBrandsComponent implements OnInit{
  brandForm: FormGroup;
  isEditMode: boolean = false;
  titleModal:string = '';

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ModalBrandsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Brand | null,
    private brandService: BrandService,
    private messageService: MessageService
  ) {}

  private _buildForm(): void {
    this.brandForm = this.fb.group({
      brandName: ['', Validators.required],
      brandDescription: [true, Validators.required],
      brandStatus: [true, Validators.required]
    });

    // If editing an existing category, populate the form with the existing data
    if (this.data) {
      this.brandForm.patchValue(this.data);
    }
  }

  ngOnInit(): void {
    // this.brandForm = this.fb.group({
    //   categoryTitle: ['', Validators.required],
    //   categoryStatus: [true, Validators.required]
    // });

    if (this.data) {
      this.isEditMode = true;
      this.brandForm.patchValue({
        // categoryTitle: this.data.title,
        // categoryStatus: this.data.status
      });
    }

    if (this.isEditMode) {
      this.titleModal = 'Editar marca';
    }else{
      this.titleModal = 'Crear marca';
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  async onSubmit() {
    if (this.brandForm.invalid) {
      return;
    }

    // let message = 'Categoría actualizada';
    // if (this.brandForm.valid) {
    //   const category_val = {
    //     ...this.brandForm.value,
    //     category_id: this.data ? this.data.id : null,
    //     created_at: new Date().toISOString(),
    //     updated_at: new Date().toISOString()
    //   };

    //   if (this.isEditMode) {
    //     this.updateCategory(category_val);
    //   } else {
    //     this.createCategory(category_val);
    //   }
    // } else {
    //   console.log('Formulario inválido');
    // }
  }

  createBrand(brand: Partial<BrandRequest>): void {
    this.brandService.createBrand(brand).subscribe(
      (response) => {
        this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Categoría creada exitosamente' });
        this.dialogRef.close({ success: true });
      },
      (error) => {
        console.error('Error al crear categoría:', error);
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al crear la marca' });
        // this.dialogRef.close({ success: false });
      }
    );
  }

}
