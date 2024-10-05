import { Component, OnInit } from '@angular/core';

declare interface EventsInfo {
  status?: string;
  icon?: string;
  label?: string;
  index?: number;
}

export var EVENTS: EventsInfo[] = [
  { label: 'Información Básica', status: 'active', icon: 'pi pi-shopping-cart', index : 0 },
  { label: 'Información del Proveedor', status: '', icon: 'pi pi-truck', index : 1 },
  { label: 'Revisión', status: '', icon: 'pi pi-check', index : 2 }
];

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'] // Corrige styleUrl a styleUrls
})
export class CreateComponent implements OnInit {
  events: EventsInfo[];
  currentPhase: number = 1; // Fase actual
  product = {
    productTitle: '',
    productDescription: '',
    productPrice: 0,
    productQuantity: 0,
    providerId: '',
    previousStock: 0,
    currentStock: 0,
  };
  productDetail = {
    product_description: '',
    warranty: '',
    dimensions: '',
    material: '',
    color: '',
    weight: 0,
  };
  kardex = {
    providerId: null,  // Debería ser un número que corresponde al id del proveedor seleccionado
    cantidad: 0,
    valor_unitario: 0,
    descripcion: '',
  };
  brands = [
    { id: 1, name: 'Sony' },
    { id: 2, name: 'Microsoft' },
    { id: 3, name: 'Nintendo' },
    { id: 4, name: 'Logitech' }
  ];

  categories = [
    { id: 1, name: 'Videojuegos' },
    { id: 2, name: 'Consolas' },
    { id: 3, name: 'Accesorios para Consolas' },
    { id: 4, name: 'Merchandising' }
  ];

  tags = [
    { id: 1, name: 'Consola' },
    { id: 2, name: 'Gaming' },
    { id: 3, name: 'Accesorios' },
    { id: 4, name: 'Videojuegos' },
    { id: 5, name: 'Inalámbrico' },
    { id: 6, name: '4K' },
    { id: 7, name: 'Mecánico' },
    { id: 8, name: 'Ergonómico' },
    { id: 9, name: 'Cancelación de Ruido' },
    { id: 10, name: 'Multijugador' },
    { id: 11, name: 'Aventura' },
    { id: 12, name: 'Exploración' },
    { id: 13, name: 'Alta Velocidad' },
    { id: 14, name: 'Retroiluminación RGB' },
    { id: 15, name: 'Juegos de Disparos' },
  ];

  providers = [
    { label: 'TechStore SAC', value: 1 },
    { label: 'GamerZone EIRL', value: 2 },
    { label: 'ElectroPeru SAC', value: 3 },
    { label: 'ConsolaMania SAC', value: 4 },
    { label: 'Accesorios Gamer EIRL', value: 5 },
];

  selectedProviders: number[] = [];
  selectedBrands: number[] = []; 
  selectedCategories: number[] = []; 
  selectedTags: number[] = [];

  ngOnInit() {
    this.events = [...EVENTS];
  }

  nextPhase() {
    if (this.currentPhase < this.events.length) {
      this.currentPhase++;
      this.updateEvents();
    }
  }

  prevPhase() {
    if (this.currentPhase > 1) {
      this.currentPhase--;
      this.updateEvents();
    }
  }

  goToPhase(phase: number) {
    console.log('Phase clicked:', phase);
    if (phase >= 1 && phase <= this.events.length) {
      this.currentPhase = phase;
      this.updateEvents();
    } else {
      console.error('Invalid phase:', phase);
    }
  }

  updateEvents() {
    this.events = this.events.map((event, index) => {
      if (index + 1 === this.currentPhase) {
        return { ...event, status: 'active' }; // Estado activo para la fase actual
      } else if (index + 1 < this.currentPhase) {
        return { ...event, status: 'completed' }; // Estado completado para fases anteriores
      } else {
        return { ...event, status: '' }; // Estado vacío para fases futuras
      }
    });
  }

  onSubmit() {
    console.log('Producto enviado:', this.product);
    // Aquí se enviaría el producto al backend
  }
}
