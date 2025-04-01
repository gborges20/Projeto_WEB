import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-produtos',
  standalone: true, // Certifique-se de que o componente é standalone
  imports: [CommonModule], // Importa o CommonModule para usar *ngFor e outras diretivas
  template: `
    <h1>Lista de Produtos</h1>
    <ul>
      <li *ngFor="let produto of produtos">{{ produto.nome }}</li>
    </ul>
  `,
  styles: []
})
export class ListaProdutosComponent {
  produtos = [
    { nome: 'Produto 1' },
    { nome: 'Produto 2' },
    { nome: 'Produto 3' }
  ];
}