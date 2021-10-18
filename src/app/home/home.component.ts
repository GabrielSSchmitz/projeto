import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { InputMask } from 'primeng/inputmask';
import './home.component.css'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('CPF') CPF!: InputMask;
  @ViewChild('CNS') CNS!: InputMask;

  public texto: string = '';
  public tamanho: number = 0;
  public teste: boolean = true;
  public complete: boolean = false;
  public textoAUX: string = '';
  public verificador: boolean = false;

  constructor(
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
  }

  showResponse(response:any) {
    //call to a backend to verify against recaptcha with private key
  }

  atualizatamanho() {
    console.log(this.complete)
    console.log(this.verificador)
    if (this.complete && this.verificador) {
      this.teste = false;
      this.changeDetector.detectChanges();
      this.CNS.focus()
      this.CNS.input.setAttribute("tabindex", "11")
      console.log(this.CNS)
      this.complete = false;
      this.verificador = false;

    } else if (this.complete && this.verificador == false) {
      this.verificador = true;
      this.atualizaComplete()
    }
  }

  atualizaComplete() {
    this.complete = true;
  }

  altera() {
    this.teste ? this.teste = false : this.teste = true;
  }

}
