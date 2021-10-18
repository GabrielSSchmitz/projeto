import { CadastroPessoaComponent } from './cadastro-pessoa.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelModule } from 'primeng/panel';
import { SharedModule } from 'primeng/api';


@NgModule({
  declarations: [
    CadastroPessoaComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    CommonModule,
    PanelModule,
    SharedModule
  ]
})
export default class CadastroPessoaModule { }
