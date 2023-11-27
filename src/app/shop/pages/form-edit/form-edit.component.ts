import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../productos/products.service';
import { Router, ActivatedRoute } from '@angular/router';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.scss']
})
export class FormEditComponent implements OnInit {
  editProductForm: FormGroup;
  productId: string;
  productImage: string; // Agrega esta propiedad

  constructor(
    private fb: FormBuilder,
    private productService: ProductsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.editProductForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      type: ['', Validators.required],
      status: [false, Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productId = params['id'];
      this.loadProductData(this.productId);
    });
  }

  loadProductData(productId: string) {
    this.productService.getProductById(productId).subscribe(
      (product) => {
        this.editProductForm.setValue({
          title: product.title,
          description: product.description,
          price: product.price,
          type: product.type,
          status: product.status
        });

        this.productImage = product.image; // Asigna la URL de la imagen
      },
      (error) => {
        console.error('Error al cargar la información del producto', error);
      }
    );
  }

  onSubmit() {
    if (this.editProductForm.valid) {
      const updatedProductData = this.editProductForm.value;

      this.productService.updateProduct(this.productId, updatedProductData).pipe(
        catchError((error) => {
          console.error('Error al actualizar el producto:', error);
          throw error;
        })
      ).subscribe(
        () => {
          console.log('Producto actualizado con éxito');
          this.router.navigate(['/done']); // Redirige a la página de confirmación
        }
      );
    }
  }
}
