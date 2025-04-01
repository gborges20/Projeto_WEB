import { Component } from '@angular/core';

@Component({
  selector: 'app-carrinho-compras',
  standalone: true,
  templateUrl: './carrinho-compras.component.html',
  styleUrls: ['./carrinho-compras.component.css']
})
export class CarrinhoComprasComponent {
  itens = [
    { nome: 'Placa de Vídeo', preco: 2500 },
    { nome: 'Processador', preco: 1200 },
    { nome: 'Memória RAM', preco: 400 }
  ];

  calcularTotal(): number {
    return this.itens.reduce((total, item) => total + item.preco, 0);
  }

  removerItem(item: any): void {
    this.itens = this.itens.filter(i => i !== item);
  }

  finalizarCompra(): void {
    alert('Compra finalizada com sucesso!');
    this.itens = []; // Limpa o carrinho
  }
}
