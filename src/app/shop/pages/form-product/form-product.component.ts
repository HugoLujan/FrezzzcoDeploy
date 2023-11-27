import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../productos/products.service';
import { Router } from '@angular/router';
import { NgUploaderService, UploadOutput, UploadInput, UploadFile } from 'ngx-uploader';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {
  productForm: FormGroup;
  selectedImage: File;

  constructor(
    private fb: FormBuilder,
    private productService: ProductsService,
    private router: Router
  ) {
    this.productForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      type: ['', Validators.required],
      status: [false, Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onImageSelected(event: any) {
    this.selectedImage = event.target.files[0];
    if (this.selectedImage) {
        console.log("Archivo seleccionado:", this.selectedImage);
    }
}


  onSubmit() {
    if (this.productForm.valid) {
      const productData = this.productForm.value;

      if (this.selectedImage) {
        this.productService.addProductWithImage(productData, this.selectedImage).subscribe(
          (response) => {
            console.log('Producto creado con éxito', response);
            this.router.navigate(['/done']);
          },
          (error) => {
            console.error('Error al crear el producto', error);
          }
        );
      } else {
        console.error('Debes seleccionar una imagen.');
      }
    }
  }
}
