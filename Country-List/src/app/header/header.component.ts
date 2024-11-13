import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule], // Agregar CommonModule aquí
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'] // Asegúrate de que esté en plural
})

export class HeaderComponent { }
