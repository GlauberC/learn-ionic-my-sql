import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  private url : String = 'bd4web-glaubercarv850761.codeanyapp.com/Testes/cadastro.php'

  public data = {
    nome: "",
     email: "",
      senha: ""
    };

  constructor(public navCtrl: NavController, public service: ServiceProvider,
     public alertCtrl: AlertController) {

  }
  postData( data ){
    this.service.postData(data).subscribe(
      data=>console.log(data.mensage),
      err=>console.log(err),
      this.showAlert()
    );
  }
  showAlert() {
  let alert = this.alertCtrl.create({
    title: 'Cadastro Adicionado!',
    subTitle: 'Seu cadastro foi feito com sucesso',
    buttons: ['OK']
  });
  alert.present();
}


}
