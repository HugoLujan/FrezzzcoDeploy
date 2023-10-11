import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../productos/products.service';

@Component({
  selector: 'app-detailsproduct',
  templateUrl: './detailsproduct.component.html',
  styleUrls: ['./detailsproduct.component.scss']
})
export class DetailsproductComponent implements OnInit {
  productId: string;
  product: any; // Variable para almacenar los detalles del producto

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.productId = params.get('id'); // Obten el valor del parámetro 'id' de la URL
      // Cargar los detalles del producto utilizando el 'id'
      this.loadProductDetails(this.productId);
    });
  }

  loadProductDetails(productId: string) {
    // Utiliza el servicio para obtener los detalles del producto por su ID
    this.productService.getProductById(productId).subscribe((data) => {
      this.product = data;
    });
  }

  // Puedes agregar lógica adicional aquí, como agregar al carrito, etc.
}