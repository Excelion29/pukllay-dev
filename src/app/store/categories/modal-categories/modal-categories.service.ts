import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ComponentType } from 'ngx-toastr';
import { Category } from '../../../core/models/Category';

@Injectable({
  providedIn: 'root',

})
export class ModalCategoriesService {

  private readonly _dialog = inject(MatDialog);

  openModal<CT, T=Category>(componentRef: ComponentType<CT>, data?: T): void {
      const config = { data, isEditing: !!data }

      this._dialog.open(componentRef, {
        data: config,
        width: '600px',
      });
    }

    closeModal(): void {
      this._dialog.closeAll();
    }
}
