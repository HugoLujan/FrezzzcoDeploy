import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  selectedTab: string = 'Playera'; // Pestaña seleccionada por defecto
  products: any[] = []; // Almacena los productos

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.loadProducts(this.selectedTab); // Cargar productos al iniciar la página
  }

  showTab(tabName: string) {
    this.selectedTab = tabName;
    this.loadProducts(tabName); // Cargar productos al cambiar de pestaña
  }

  loadProducts(type: string) {
    this.productService.getProductsByType(type).subscribe((data) => {
      this.products = data;
    });
  }
}
