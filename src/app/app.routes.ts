import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { CarrinhoComprasComponent } from './carrinho-compras/carrinho-compras.component';
import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';

const routes: Routes = [
  { path: 'produto', component: ListaProdutosComponent },
  { path: 'carrinho', component: CarrinhoComprasComponent },
  { path: 'detalhes', component: DetalhesProdutoComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
