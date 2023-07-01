import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  email = '';
  senha = '';
  lista = [];
  roleMessage = '';
  handlerMessage = '';

  constructor(
    private nav: NavController, 
    private alertController: AlertController) 
    { }

  ngOnInit() {
    const aux: any = localStorage.getItem('usuarios');
    this.lista = aux ? JSON.parse(aux) : [];

  }

  login() {
    const email = this.email
    const senha = this.senha
    const obj: any = { email, senha }
    const data = JSON.stringify(this.lista.concat(obj))
    this.nav.navigateBack('home')

  }

  message = 'E-mail enviado';
  sayMessage() {
    alert(this.message);
  }


  async presentAlert() {

    const alert = await this.alertController.create({
      header: 'Insira o seu e-mail para redefinição de senha.',
      buttons: ['Cancelar', 'Enviar'],
      inputs: [
        {
          placeholder: 'E-mail',
          type: 'text',
        },
        
      ],
    });

    await alert.present();
  }
}