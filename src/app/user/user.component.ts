import { Component, OnInit } from '@angular/core';
import { User } from '../entity/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  public user!:User;
  public users!:User[];
  
    constructor(
      private userServices: UserService
    ) { }
  
  ngOnInit(): void {
    this.user = this.userServices.pegaUsuario();
    this.users = this.userServices.listaUsuarios();
  }

}
