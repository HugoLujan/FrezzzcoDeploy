import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  selectedTab: string = 'Playera';
  products: any[] = [];

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.loadProducts(this.selectedTab);
  }

  showTab(tabName: string) {
    this.selectedTab = tabName;
    this.loadProducts(tabName);
  }

  loadProducts(type: string) {
    this.productService.getProductsByType(type).subscribe((data) => {
      console.log(data);
      this.products = data;
    });
  }

  getImageUrl(filename: string): string {
    const imageUrl = `${this.productService.getBaseUrl()}/uploads/${filename}`;
    console.log('URL de la imagen:', imageUrl);
    return imageUrl;
  }  
}