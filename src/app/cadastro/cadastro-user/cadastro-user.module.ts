import { CadastroUserComponent } from './cadastro-user.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CardModule } from 'primeng/card';
@NgModule({
  declarations: [CadastroUserComponent],
  imports: [
    CommonModule,
    FormsModule,
    MessagesModule,
    MessageModule,
    InputTextModule,
    ButtonModule,
    PanelModule,
    ToastModule,
    AutoCompleteModule,
    CardModule,
  ],
  providers: [MessageService],
})
export class CadastroUserModule {}
