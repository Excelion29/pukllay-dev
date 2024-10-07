import { Component, OnInit } from '@angular/core';

declare interface ProvidersInfo {
  providerCode?: string;
  providerName?: string;
  providerRuc?: string;
  providerDirection?: string;
  providerPhone? : string;
  providerEmail? : string;
}

export var PROVIDERS: ProvidersInfo[] = [
  {
    providerCode: "P001",
    providerName: "TechStore SAC",
    providerRuc: "20458796321",
    providerDirection: "Av. Los Olivos 345, Lima",
    providerPhone: "987654321",
    providerEmail: "contacto@techstore.com.pe"
  },
  {
    providerCode: "P002",
    providerName: "GamerZone EIRL",
    providerRuc: "20147895678",
    providerDirection: "Jr. Puno 145, Arequipa",
    providerPhone: "998877665",
    providerEmail: "ventas@gamerzone.com"
  },
  {
    providerCode: "P003",
    providerName: "ElectroPeru SAC",
    providerRuc: "20678954123",
    providerDirection: "Calle Comercio 567, Cusco",
    providerPhone: "976543210",
    providerEmail: "info@electroperu.com"
  },
  {
    providerCode: "P004",
    providerName: "ConsolaMania SAC",
    providerRuc: "20345678901",
    providerDirection: "Av. Primavera 1234, San Borja",
    providerPhone: "934567890",
    providerEmail: "soporte@consolamania.com.pe"
  },
  {
    providerCode: "P005",
    providerName: "Accesorios Gamer EIRL",
    providerRuc: "20234567890",
    providerDirection: "Calle Los Pinos 876, Trujillo",
    providerPhone: "912345678",
    providerEmail: "accesorios@agamer.com"
  }
];

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrl: './providers.component.css'
})

export class ProvidersComponent implements OnInit {
  
  providers: ProvidersInfo[];
  totalRecords: number = 0;
  rows: number = 10;
  page: number = 1;

  constructor() { }

  ngOnInit() {
    this.providers = [...PROVIDERS]; // Asignar todos los productos
  }

  loadProviders(event: any) {
    // Calcular el rango de productos a mostrar
    const start = event.first; // Índice del primer producto
    const end = start + event.rows; // Índice del último producto
    this.providers = PROVIDERS.slice(start, end); // Cargar los productos para la página actual
    this.totalRecords = PROVIDERS.length; // Actualizar el total de registros
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
