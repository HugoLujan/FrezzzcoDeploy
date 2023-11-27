import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarruselService {
  private baseUrl = 'http://localhost:4000'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) { }

  getImages(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/carrusel`);
  }

  updateImage(id: string, imageData: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/carrusel/${id}`, imageData);
  }

  // Método para agregar una nueva imagen al carrusel
  addImage(images: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/carrusel`, images);
  }
  

  // Método para eliminar una imagen del carrusel
  deleteImage(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/carrusel/${id}`);
  }
}
