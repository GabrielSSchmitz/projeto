import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  items!: MenuItem[];

  ngOnInit() {

    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: "home"
      },
      {
        label: 'Usuario',
        icon: 'pi pi-fw pi-user',
        items: [
          { label: 'Usuario', icon: 'pi pi-fw pi-user', routerLink: "usuario" },
          { label: 'Cadastro', icon: 'pi pi-fw pi-user-plus', routerLink: "usuario/cadastro" }
        ]
      },
      {
        label: 'API',
        icon: 'pi pi-fw pi-external-link',
        items: [
          { label: 'Endereço', icon: 'pi pi-fw pi-search', routerLink: 'estados' }
        ]
      },
      {
        label: 'Pessoa',
        icon: 'pi pi-fw pi-book',
        items: [
          { label: 'Pessoa', icon: 'pi pi-fw pi-list', routerLink: 'pessoa' },
          { label: 'Cadastrar', icon: 'pi pi-fw pi-plus', routerLink: 'pessoa/cadastro' }
        ]
      }
    ];
  }

}
