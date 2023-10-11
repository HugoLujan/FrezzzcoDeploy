import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-barberos',
  templateUrl: './barberos.component.html',
  styleUrls: ['./barberos.component.scss']
})
export class BarberosComponent implements OnInit {

  constructor(config: NgbCarouselConfig) {
    // Configura el carrusel con un intervalo de tiempo y otros parámetros si es necesario
    config.interval = 2000; // Cambia el intervalo de tiempo entre imágenes (en milisegundos)
    config.wrap = true; // Permite que el carrusel vuelva al principio después de llegar al final
    config.keyboard = true; // Permite el control del carrusel mediante el teclado (flechas izquierda/derecha)
  }

  // Define las imágenes del carrusel
  images = [
    'assets/img/cortes/DSC02309.jpg',
    'assets/img/cortes/DSC04205.jpg',
    'assets/img/cortes/DSC05089.jpg',
  ];

  ngOnInit(): void {
  }

}
