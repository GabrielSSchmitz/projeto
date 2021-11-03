import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../entity/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url = environment.host + 'usuario';

  constructor(private http: HttpClient) {}

  public salvar(usuario: User): Observable<User> {
    return this.http.post<User>(this.url, usuario);
  }

  public deletar(id: string): Observable<any> {
    return this.http.delete(this.url + '/' + id);
  }

  public pegaUsuario(): User {
    let user = new User();
    user.nome = 'Desenvolvedor';
    user.email = 'Desenvolvedor@dev.com';

    return user;
  }

  public listaUsuarios(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }
}
