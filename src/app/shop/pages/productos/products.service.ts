import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/products`);
  }

  getProductsByType(type: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/products/type/${type}`);
  }

  getProductById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/products/${id}`);
  }

  addProductWithImage(product: any, imageFile: File): Observable<any> {
    const formData = new FormData();
    formData.append('image', imageFile);
    formData.append('title', product.title);
    formData.append('description', product.description);
    formData.append('price', product.price);
    formData.append('type', product.type);
    formData.append('status', product.status ? 'true' : 'false');
  
    return this.http.post<any>(`${this.apiUrl}/productsWithImage`, formData);
  }

  updateProduct(id: string, product: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/products/${id}`, product);
  }

  deleteProduct(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/products/${id}`);
  }

  getBaseUrl(): string {
    return this.apiUrl;
  }
}