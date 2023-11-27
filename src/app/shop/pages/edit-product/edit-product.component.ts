import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../productos/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  productos: any[] = [];

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos() {
    this.productService.getProducts().subscribe(
      (data: any[]) => {
        this.productos = data;
      },
      (error) => {
        console.error('Error al cargar los productos', error);
      }
    );
  }

  editarProducto(producto: any) {
    // Lógica para editar el producto
  }

  borrarProducto(producto: any) {
    // Aquí puedes llamar al servicio para eliminar el producto
    this.productService.deleteProduct(producto._id).subscribe(
      () => {
        // Eliminación exitosa, puedes actualizar la lista de productos
        this.cargarProductos();
      },
      (error) => {
        console.error('Error al eliminar el producto', error);
      }
    );
  }
}