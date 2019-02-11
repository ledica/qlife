import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-cadastro-conta',
  templateUrl: 'cadastro-conta.html',
})
export class CadastroContaPage {
  formGroup: FormGroup;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder) {
      this.formGroup = this.formBuilder.group({
        nome: ['Joaquim', [Validators.required, Validators.minLength(5), Validators.maxLength(120)]],
        email: ['joaquim@gmail.com', [Validators.required, Validators.email]],
        cpf : ['06134596280', [Validators.required, Validators.minLength(11), Validators.maxLength(12)]],
        rg : ['06134596280', [Validators.required, Validators.minLength(6), Validators.maxLength(14)]],
        password : ['12345678', [Validators.required]],
        telefone : ['977261827', [Validators.required]]
      });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroContaPage');
  }
  goToCadastroPerfil(params){
    if (!params) params = {};
    this.navCtrl.push('CadastroPerfilPage');
  }
  signupUser() {
    console.log("enviou o form");
  }
}
