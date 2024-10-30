import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Users } from '../interface/user.data';

declare interface ProductInfo {
  productCode?: string;
  productName?: string;
  productDescription?: string;
  productPrice?: number;
  productQuantity?: number;
  productInventoryStatus?: string;
  productCategory?: string;
  productImage?: string;
  productRating?: number;
  productCurrency?: string;
}

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  private apiUrl = 'api/products';

  constructor(private http: HttpClient) { }

  products =  [
    {
      productCode: 'PR-1',
      productName: 'PlayStation 5',
      productDescription: 'Consola de última generación con gráficos 4K y retrocompatibilidad.',
      productPrice: 499.99,
      productQuantity: 10,
      productInventoryStatus: 'INSTOCK',
      productCategory: 'Consola',
      productImage: 'https://m.media-amazon.com/images/I/619BkvKW35L._AC_SL1500_.jpg',
      productRating: 5,
      productCurrency: 'PEN'
    },
    {
      productCode: 'PR-2',
      productName: 'Xbox Series X',
      productDescription: 'La consola más potente de Microsoft, con capacidad de 4K y juegos en alta velocidad.',
      productPrice: 499.99,
      productQuantity: 8,
      productInventoryStatus: 'INSTOCK',
      productCategory: 'Consola',
      productImage: 'https://coolboxpe.vtexassets.com/arquivos/ids/211100/image-33f6308c982644b092cf85ce0057ddf4.jpg?v=637873787852970000',
      productRating: 4.8,
      productCurrency: 'PEN'
    },
    {
      productCode: 'PR-3',
      productName: 'Nintendo Switch',
      productDescription: 'Consola híbrida que combina juego en casa y en movilidad.',
      productPrice: 299.99,
      productQuantity: 15,
      productInventoryStatus: 'INSTOCK',
      productCategory: 'Consola',
      productImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdIqTeyzf6GGI39oAgBBOfK0Ds1FYhM_93KA&s',
      productRating: 4.7,
      productCurrency: 'PEN'
    },
    {
      productCode: 'PR-4',
      productName: 'Logitech G502 HERO',
      productDescription: 'Mouse para gaming con sensor HERO de alta precisión y diseño ergonómico.',
      productPrice: 79.99,
      productQuantity: 25,
      productInventoryStatus: 'INSTOCK',
      productCategory: 'Accesorios',
      productImage: 'https://www.sercoplus.com/20657-large_default/mouse-logitech-gaming-g502-hero-rgb-usb-910-005469.jpg',
      productRating: 4.9,
      productCurrency: 'PEN'
    },
    {
      productCode: 'PR-5',
      productName: 'Razer BlackWidow V3',
      productDescription: 'Teclado mecánico para gaming con retroiluminación RGB y switch mecánicos.',
      productPrice: 129.99,
      productQuantity: 20,
      productInventoryStatus: 'INSTOCK',
      productCategory: 'Accesorios',
      productImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUBxlkreR6xqomVuyuhF_nXcdbz7iUBywmRQ&s',
      productRating: 4.6,
      productCurrency: 'PEN'
    },
    {
      productCode: 'PR-6',
      productName: 'Sony WH-1000XM4',
      productDescription: 'Auriculares inalámbricos con cancelación de ruido y calidad de sonido superior.',
      productPrice: 349.99,
      productQuantity: 12,
      productInventoryStatus: 'INSTOCK',
      productCategory: 'Accesorios',
      productImage: 'https://i5.walmartimages.com/asr/25f5b4fd-9021-462a-82a3-cce8c89173f8.ec6240c7a97f75532e2f00022e1bb532.jpeg',
      productRating: 4.8,
      productCurrency: 'PEN'
    },
    {
      productCode: 'PR-7',
      productName: 'Call of Duty: Modern Warfare II',
      productDescription: 'Juego de disparos en primera persona con gráficos impresionantes y modo multijugador.',
      productPrice: 59.99,
      productQuantity: 50,
      productInventoryStatus: 'INSTOCK',
      productCategory: 'Videojuegos',
      productImage: 'https://i5.walmartimages.com/seo/Call-of-Duty-Modern-Warfare-II-C-O-D-E-Edition-PlayStation-4_afc46290-c29d-4b46-ac5c-78dab8099b5b.67a499126f0fd4c8b049c9a86bce6643.jpeg',
      productRating: 4.5,
      productCurrency: 'PEN'
    },
    {
      productCode: 'PR-8',
      productName: 'The Legend of Zelda: Breath of the Wild',
      productDescription: 'Juego de aventura y exploración en un mundo abierto lleno de sorpresas.',
      productPrice: 59.99,
      productQuantity: 30,
      productInventoryStatus: 'INSTOCK',
      productCategory: 'Videojuegos',
      productImage: 'https://upload.wikimedia.org/wikipedia/en/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg',
      productRating: 4.9,
      productCurrency: 'PEN'
    }
  ]


  createDb() {
    return { products: this.products };
  }

  // getProducts(reqInfo: any): Observable<ProductInfo[]> {
  //   return this.http.get<ProductInfo[]>(this.apiUrl);
  // }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }


    // updateProducts(user: ProductInfo) {
  //   return this.http.put(this.apiUrl, user);
  // }
  // deleteProducts(id: number) {
  //   return this.http.delete(this.apiUrl+'/'+id);
  // }
  // addProducts(user: ProductInfo){
  //   return this.http.post(this.apiUrl, user);
  // }
}
