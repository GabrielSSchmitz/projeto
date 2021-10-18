import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroUserComponent } from '../cadastro/cadastro-user/cadastro-user.component';
import { UserComponent } from './user.component';


const routes: Routes = [
  {
    path: '', 
    component: UserComponent
  },{
    path: 'cadastro', 
    component: CadastroUserComponent
  }
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

export class UserRoutingModule { }
