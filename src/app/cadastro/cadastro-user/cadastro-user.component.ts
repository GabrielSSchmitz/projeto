import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/entity/user';
import { MessageService } from 'primeng/api';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cadastro-user',
  templateUrl: './cadastro-user.component.html',
  styleUrls: ['./cadastro-user.component.css'],
})
export class CadastroUserComponent implements OnInit {
  public usuario: User = new User();
  public text!: string;
  public results!: string[];
  public source: string[] = ['Desenvolvedor', 'QA', 'Suporte'];

  public text1!: string;
  public results1!: string[];

  public prod: boolean = environment.production;

  constructor(
    private messageService: MessageService,
    private userServices: UserService
  ) {}

  ngOnInit(): void {
    this.text = '';
    this.results = [];
  }

  totalResults() {
    this.results = this.source;
  }

  search() {
    this.results = [];
    // this.results = this.source.filter((filter) => filter.includes(this.text));
    this.source.forEach((elemento) => {
      if (elemento.toUpperCase().includes(this.text.toUpperCase())) {
        this.results.push(elemento);
      }
    });
  }

  addSingle() {
    this.messageService.add({
      severity: 'success',
      summary: 'Service Message',
      detail: 'Via MessageService',
    });
  }

  public salvar() {
    if (this.usuario.nome == '') {
      this.messageService.add({
        severity: 'error',
        summary: 'Erro',
        detail: 'Usuario ' + this.usuario.nome + ' não foi cadastrado!',
      });
    } else {
      this.userServices.salvar(this.usuario).subscribe(
        (response) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Cadastro realizado',
            detail: 'Usuario ' + this.usuario.nome + ' cadastrado!',
          });
        },
        (erro) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Erro',
            detail: 'Usuario ' + this.usuario.nome + ' cadastrado!',
          });
        }
      );
    }
  }
}
