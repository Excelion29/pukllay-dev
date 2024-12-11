import { Component, inject, OnInit } from '@angular/core';
import { Brand, BrandResponse } from '../../core/models/Brands';
import { ModalBrandsComponent } from './modal-brands/modal-brands.component';
import { BrandService } from '../../core/services/brand.service';
import { MatDialog,MatDialogRef  } from '@angular/material/dialog';

// declare interface BrandsInfo {
//   brandCode?: string;
//   brandName?: string;
//   brandDescription?: string;
//   brandLogo?: string;
//   brandStatus? : boolean;
// }

// export var BRANDS: BrandsInfo[] = [
//   {
//     brandCode: 'BRAND#01',
//     brandName: 'Sony',
//     brandDescription: 'Sony es una de las compañías más grandes y reconocidas en el ámbito de los videojuegos, creadora de la famosa PlayStation.',
//     brandLogo: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7519b96c-71f8-4040-82d4-c80e18384f1b/dfiuan6-258d32e7-db95-4967-a2f5-6e787ebda881.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc1MTliOTZjLTcxZjgtNDA0MC04MmQ0LWM4MGUxODM4NGYxYlwvZGZpdWFuNi0yNThkMzJlNy1kYjk1LTQ5NjctYTJmNS02ZTc4N2ViZGE4ODEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.EOarrsG8MIDq8TVFMwxSZJDW-ykiUx-9PErZAcuzIE8',
//     brandStatus: true
//   },
//   {
//     brandCode: 'BRAND#02',
//     brandName: 'Microsoft',
//     brandDescription: 'Microsoft es conocida por su consola Xbox y su papel como desarrolladora de software, incluyendo juegos y sistemas operativos.',
//     brandLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUeFl5Av8bX1rREq4JVvCpsX9kNXligEn47kw5XDkpF-GeXQhuZtZM1EcP7-FmQAEG_54&usqp=CAU',
//     brandStatus: true
//   },
//   {
//     brandCode: 'BRAND#03',
//     brandName: 'Nintendo',
//     brandDescription: 'Nintendo ha sido pionera en el desarrollo de consolas y juegos, famosa por sus franquicias como Mario y Zelda.',
//     brandLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiwIZZlvrifrIqkcwve2FXuT0qv5shkyevbw&s',
//     brandStatus: true
//   },
//   {
//     brandCode: 'BRAND#04',
//     brandName: 'Logitech',
//     brandDescription: 'Logitech es un fabricante líder en accesorios para juegos, incluyendo teclados, ratones y audífonos de alta calidad.',
//     brandLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIj5IQQi7EjrrRYuRQULTCGQ1JKja-7t-fb4465c4tlXJdXsUNbrwjGfRk0FZevzw7vvE&usqp=CAU',
//     brandStatus: true
//   }
// ];

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.css'
})

export class BrandsComponent implements OnInit {

  private readonly _modalBrand = inject(ModalBrandsComponent);

  brandsService = inject(BrandService);
  brands: Brand[];
  allBrands: Brand[];
  totalRecords: number = 0;
  rows: number = 10;
  page: number = 1;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    this.getBrands();
  }

  onClickNewBrand(): void {
    const dialogRef = this.dialog.open(ModalBrandsComponent, {
      width: '400px',
      data: null // No se pasa ningún dato para crear una nueva categoría
    });

    dialogRef.afterClosed().subscribe(result => {
      // if (result && result.success) {
      //   this.getBrands(); // Recarga las categorías después de crear una nueva
      // }
    });
  }

  getBrands() {
    this.brandsService.getBrands().subscribe(
      (data: BrandResponse) => {
        console.log(data.brands);
        this.allBrands = data.brands;
        this.totalRecords = data.pagination.total;
        this.loadBrands({ first: 0, rows: this.rows });
      },
      (error) => {
        console.error('Error al cargar categorías:', error); // Maneja el error
      }
    );
  }

  loadBrands(event: any) {
    // Calcular el rango de categorías a mostrar
    const start = event.first; // Índice del primer producto
    const end = start + event.rows; // Índice del último producto
    this.brands = this.allBrands.slice(start, end); // Cargar las categorías para la página actual
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
