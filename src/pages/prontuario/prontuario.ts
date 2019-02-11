import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StorageService } from '../../services/storage.service';
import { UsuarioService } from '../../services/domain/usuario.service';
import { Usuario } from '../../models/usuario';
import { API_CONFIG } from '../../config/api.config';

@IonicPage()
@Component({
  selector: 'page-prontuario',
  templateUrl: 'prontuario.html',
})
export class ProntuarioPage {
  usuario: Usuario;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: StorageService,
    public usuarioService: UsuarioService) {
  }

  ionViewDidLoad() {
    let localUser = this.storage.getLocalUser();
    if (localUser && localUser.email) {
      this.usuarioService.findByEmail(localUser.email).subscribe(response => {
        this.usuario = response;
        this.getImageIfExists();
      }, error => { });
    }
  }

  getImageIfExists() {
    this.usuarioService.getImageFromPerfilPessoal(this.usuario.id)
    .subscribe(response => {
      this.usuario.perfilPessoal.imageUrl =`${API_CONFIG.baseUrl}/api/v1/usuario/${this.usuario.id}/perfil/pessoal/avatar`
      ;
    },
    error => {});
  }

}
