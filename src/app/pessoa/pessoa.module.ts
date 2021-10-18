import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PessoaComponent } from './pessoa.component';
import { PessoaRoutingModule } from './pessoa.routing.module';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';



@NgModule({
  declarations: [
    PessoaComponent
  ],
  imports: [
    CommonModule,
    PessoaRoutingModule,
    ButtonModule,
    PanelModule

  ]
})
export class PessoaModule { }
