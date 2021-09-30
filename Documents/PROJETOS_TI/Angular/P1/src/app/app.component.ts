
//BACK-END
import { Component, EventEmitter, Output } from '@angular/core';

//COMPONENTE
@Component({ 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//CLASSE COMUM
export class AppComponent {

//VARIAVEIS
//title = 'data-binding';
// nome = 'José'
// idade = 20

nome;
recomendacao;
recomendacoes = [
  {recomendacao: 'invente a sua'},
  {recomendacao: 'invente a suax'},
  {recomendacao: 'invente a sua'}
]

//METODOS
alterarNome(evento){ //o método deve pegar evento, n variavel
  console.log(evento.target.value)
  this.nome=evento.target.value
}

adicionar(recomendacao){
  this.recomendacoes= [{recomendacao},...this.recomendacoes]
  console.log(recomendacao)
  console.log("Recomendacao inserida...")
}

@Output () recomendacaoAdicionada = new EventEmitter()
adicionar2(recomendacao){
  this.recomendacaoAdicionada.emit(recomendacao)
}

onRecomendacaoAdicionada(recomendacao){
  this.recomendacoes = [recomendacao, ...this.recomendacoes]
}

//alterarExibicao(){
  //this.textoBotao = this.esconder ? "Exibir":"Esconder"
  //this.esconder = !this.esconder 
//}

}
