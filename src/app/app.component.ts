import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  
  rootPage: string = 'HomePage';

  pages: Array<{title: string, component: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();


   
    // used for an example of ngFor and navigation
    this.pages = [
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

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
