
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { CarrinhoComprasComponent } from './carrinho-compras/carrinho-compras.component';
import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';

export const routes: Routes = [
  { path: '', redirectTo: 'produto', pathMatch: 'full' }, // Redireciona para a lista de produtos
  { path: 'produto', component: ListaProdutosComponent },
  { path: 'carrinho', component: CarrinhoComprasComponent },
  { path: 'detalhes', component: DetalhesProdutoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
