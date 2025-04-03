import { Component } from '@angular/core';
// import {CommonModule } from @angular
import { Produto } from '../model/produto';
@Component({
    selector: 'app-detalhes-produto',
    imports: [],
    templateUrl: './detalhes-produto.component.html',
    styleUrl: './detalhes-produto.component.css'
})
export class DetalhesProdutoComponent {
    public obj: Produto = new Produto()
    public mensagem: String = ""

    public constructor(){
        let json = localStorage.getItem("produto")
        if(json==null){
            this.mensagem = "Produto não encontrado!"
        }
        else{
            this.obj = JSON.parse(json)
        }
    }
}

