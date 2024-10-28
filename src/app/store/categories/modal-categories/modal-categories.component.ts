import { Component } from '@angular/core';
import { MatDialog, MatDialogContent } from '@angular/material/dialog';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';


const MATERIAL_MODULES = [MatLabel,MatFormField,MatDialogContent,MatInput];

@Component({
  selector: 'app-modal-categories',
  standalone: true,
  imports: [MATERIAL_MODULES],
  templateUrl: './modal-categories.component.html',
  styleUrl: './modal-categories.component.scss'
})
export class ModalCategoriesComponent {

}
