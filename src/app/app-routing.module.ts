import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'home', 
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'usuario', 
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: 'estados', 
    loadChildren: () => import('./api/estados/estados.module').then(m => m.EstadosModule)
  },
  {
    path: 'pessoa', 
    loadChildren: () => import('./pessoa/pessoa.module').then(m => m.PessoaModule)
  },
  {
    path: '', 
    pathMatch:'full', 
    redirectTo:'/home'
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
