import { Component, OnInit } from '@angular/core';
import { EstadosService } from 'src/app/services/estados.service';

@Component({
  selector: 'app-estados',
  templateUrl: './estados.component.html',
  styleUrls: ['./estados.component.css']
})
export class EstadosComponent implements OnInit {

  uf!:string
  estados!:any;
  constructor(
    private estadoServices: EstadosService
  ) { }

  ngOnInit(): void {
    this.estadoServices.pegaEstados().subscribe(response =>{
      this.estados = response
    })
  }

  public pesquisaPorUF(){
    console.log('Click')
    this.estadoServices.pegaEstadoPorUf(this.uf).subscribe(response =>{
      this.estados = response
    })
    console.log(this.estados)
  }

}
