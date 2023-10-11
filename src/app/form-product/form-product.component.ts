import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../productos/products.service';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {
  productForm: FormGroup; // Define un FormGroup para tu formulario

  constructor(
    private fb: FormBuilder,
    private productService: ProductsService
  ) {
    // Inicializa el formulario con validadores si es necesario
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

  // Define una función para enviar el formulario
  onSubmit() {
    if (this.productForm.valid) {
      // Obtiene los valores del formulario
      const productData = this.productForm.value;

      // Llama al método addProduct del servicio
      this.productService.addProduct(productData).subscribe(
        (response) => {
          // Maneja la respuesta del servidor, por ejemplo, muestra un mensaje de éxito
          console.log('Producto creado con éxito', response);
          // Puedes redirigir al usuario a una página diferente o realizar otra acción aquí
        },
        (error) => {
          // Maneja los errores, por ejemplo, muestra un mensaje de error
          console.error('Error al crear el producto', error);
        }
      );
    }
  }
}
