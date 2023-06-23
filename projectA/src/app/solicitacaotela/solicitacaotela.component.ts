import { Component } from '@angular/core';


@Component({
  selector: 'app-solicitacaotela',
  templateUrl: './solicitacaotela.component.html',
  styleUrls: ['./solicitacaotela.component.css']
})
export class SolicitacaotelaComponent {
 laboratorio!: any
 nome!:any
turma!:any
data!:any
horarioEntrada!:any

submitForm() {
            
    
  var formData = {
    nome: this.nome,
    turma: this.turma,
    laboratorio: this.laboratorio,
    data: this.data,
    horarioEntrada: this.horarioEntrada
  };

  console.table(JSON.stringify(formData));
}
}
