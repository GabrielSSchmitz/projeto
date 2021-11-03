import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { User } from '../entity/user';
import { UserService } from '../services/user.service';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [ConfirmationService],
})
export class UserComponent implements OnInit {
  @ViewChild('tebela') tabela!: Table;
  public user!: User;
  public users!: User[];

  constructor(
    private userServices: UserService,
    private confirmationService: ConfirmationService
  ) {}

  deletar(id: string) {
    this.confirmationService.confirm({
      message: 'Você tem certeza que quer deletar esse registro?',
      accept: () => {
        this.userServices.deletar(id).subscribe(
          (response) => {
            this.userServices.listaUsuarios().subscribe((response) => {
              this.users = response;
            });
          },
          (erro) => {
            alert('Erro ao deletar');
          }
        );
      },
    });
  }
  ngOnInit(): void {
    this.user = this.userServices.pegaUsuario();
    this.userServices.listaUsuarios().subscribe(
      (response) => {
        this.users = response;
      },
      (erro) => {
        alert('Erro ao carregar dados');
      }
    );
  }
}
