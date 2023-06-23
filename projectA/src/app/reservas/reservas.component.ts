import { Component , OnInit} from '@angular/core';
import { ReservasService } from '../services/reservas.service';




@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent{
  displayedColumns: string[] = ['ID', 'NomeP', 'DH', 'SALA'];
  lista!: any

  constructor(private service : ReservasService){
    this.getReservas()
    
    
  }
  getReservas ():void{
    this.service.requisicao().subscribe(a => this.lista = a);
    console.log(this.lista)
  }
}
