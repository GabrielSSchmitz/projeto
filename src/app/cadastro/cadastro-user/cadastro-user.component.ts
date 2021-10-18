import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/entity/user';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-cadastro-user',
  templateUrl: './cadastro-user.component.html',
  styleUrls: ['./cadastro-user.component.css']
})
export class CadastroUserComponent implements OnInit {

  public usuario: User = new User();

  constructor(
    private messageService: MessageService
  ) { }

  ngOnInit(): void {

  }
  addSingle() {
    this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'Via MessageService' });
  }
  public salvar() {
    this.messageService.add({ severity: 'success', summary: 'Cadastro realizado', detail: 'Usuario ' + this.usuario.nome + ' cadastrado!' });
  }

}
