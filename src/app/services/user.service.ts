import { Injectable } from '@angular/core';
import { User } from '../entity/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public pegaUsuario(): User {
    let user = new User();
    user.nome = 'Desenvolvedor';
    user.email = 'Desenvolvedor@dev.com';

    return user;
  }

  public listaUsuarios(): User[]{
    return [
      {
        nome: 'Gabriel',
        email: 'Gabriel@email.com'
      },
      {
        nome: 'Dani',
        email: 'Dani@email.com'
      },
      {
        nome: 'Brian',
        email: 'Brian@email.com'
      }
    ]  
  }
}
