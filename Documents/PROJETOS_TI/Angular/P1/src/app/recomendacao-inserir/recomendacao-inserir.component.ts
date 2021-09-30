import { Component, EventEmitter, Output} from '@angular/core';


@Component({
  selector: 'app-recomendacao-inserir',
  templateUrl: './recomendacao-inserir.component.html',
  styleUrls: ['./recomendacao-inserir.component.css']
})
export class RecomendacaoInserirComponent  {

@Output () recomendacaoAdicionada = new EventEmitter()
adicionar(texto){

}

}
