import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

export interface Product{
  id: number,
  titulo: string,
  descuento: number,
  precioFinal: number,
  precioAntes: number,
  stock: number,
  img: string,
  categoria: string,
  descripcion: string
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private API_URL = "./product.json"
  constructor(private http: HttpClient) { }
  getProducts () : Observable<Product[]>{
    return this.http.get<Product[]>(this.API_URL)
  }

  getProductById(product_id : number): Observable<Product | undefined>{
    return this.http.get<Product[]>(this.API_URL).pipe(
      map(products => products.find(products => products.id === product_id))
    )
  }
}

