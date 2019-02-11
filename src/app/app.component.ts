import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthService } from '../services/auth.service';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  
  rootPage: string = 'HomePage';

  pages: Array<{title: string, component: string}>;

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    public auth: AuthService
  ) {    this.initializeApp();


   
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Logout', component: ''},
      { title: 'Atividades', component: 'HomePage' },
      { title: 'DashBoard', component: 'SelecaoDashBoardPage' },
      { title: 'Perfil', component: "" }, 
      { title: 'Minha Ficha Médica', component: "ProntuarioPage" },
      { title: 'Perfis de Dependentes', component: "" },  
      { title: 'Meu Perfil Profissional', component: "HomeProfissionalPage" }, 
      { title: 'Gerenciar Instituições', component: "HomeInstituicaoPage" }, 
      { title: 'Alertas', component: "" }, 
      { title: 'Grupos e Contatos', component: "" }, 
      { title: 'Contatos de Emergência', component: "" }, 
      { title: 'Contatos de Familiares', component: "" }, 
      { title: 'Contatos de Amigos', component: "" }, 
      { title: 'Contatos de Profissionais de Saúde', component: "" }, 
      { title: 'Contatos de Instituições', component: "" },
      { title: 'Gráficos', component: "" }, 
      { title: 'Configurações', component: "" }, 
      { title: 'QR Code', component: "" }, 
      { title: 'Baixar Dados', component: "" },
      { title: 'Compartilhar', component: "" },
      { title: 'Termos de Uso', component: "" },
      { title: 'FAQ', component: "" },
      { title: 'Suporte', component: "" }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page : {title:string, component:string}) {

    switch (page.title) {
      case 'Logout':
      this.auth.logout();
      this.nav.setRoot('HomePage');
      break;

      default:
      this.nav.setRoot(page.component);
    }
  }
}
