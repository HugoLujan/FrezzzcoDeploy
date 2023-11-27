import { Component, OnInit } from '@angular/core';
import { CarruselService } from './carrusel.service';

@Component({
  selector: 'app-carrusel-component',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.scss']
})
export class CarruselComponent implements OnInit {
  images: any[] = [];
  saveError: string = '';

  constructor(private carruselService: CarruselService) { }

  ngOnInit(): void {
    // Obtener imágenes del carrusel al inicializar el componente
    this.carruselService.getImages().subscribe((data) => {
      this.images = data;
    });
  }

  openImageUploader(image: any, index: number, imageField: string) {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.onchange = (event: any) => {
      const file = event.target.files[0];
      if (file) {
        this.onImageChange(file, image, imageField);
      }
    };
    fileInput.click();
  }

  onImageChange(file: File, image: any, imageField: string): void {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target && e.target.result) {
          image[imageField] = e.target.result;
        }
      };
      reader.readAsDataURL(file);
    }
  }

  updateImage(image: any): void {
    this.carruselService.updateImage(image._id, {
      image1: image.image1,
      image2: image.image2,
      image3: image.image3,
    }).subscribe(
      (updatedImage) => {
        // Actualizar la imagen en la lista de imágenes
        const updatedImageIndex = this.images.findIndex((img) => img._id === image._id);
        if (updatedImageIndex !== -1) {
          this.images[updatedImageIndex] = updatedImage;
        }
      },
      (error) => {
        console.error('Error al actualizar la imagen', error);
      }
    );
  }
  
  saveChanges(): void {
    this.images.forEach((image) => {
      this.updateImage(image);
    });
  }  

  base64ToFile(base64: string): File {
    // Convierte una cadena base64 en un objeto File
    const byteCharacters = atob(base64);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: 'image/png' });
    return new File([blob], 'image.png', { type: 'image/png' });
  }
}
