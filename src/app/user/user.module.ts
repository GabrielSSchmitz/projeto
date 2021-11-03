import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user.routing.module';
import { CadastroUserModule } from '../cadastro/cadastro-user/cadastro-user.module';
import { TableModule } from 'primeng/table';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    CadastroUserModule,
    TableModule,
    MessagesModule,
    MessageModule,
    InputTextModule,
    ButtonModule,
    PanelModule,
    ConfirmDialogModule,
  ],
})
export class UserModule {}
