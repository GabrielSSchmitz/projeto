import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroPessoaComponent } from '../cadastro/cadastro-pessoa/cadastro-pessoa.component';
import { PessoaComponent } from './pessoa.component';


const routes: Routes = [
  {
    path: '',
    component: PessoaComponent
  },
  {
    path: 'cadastro',
    component: CadastroPessoaComponent
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class PessoaRoutingModule { }
