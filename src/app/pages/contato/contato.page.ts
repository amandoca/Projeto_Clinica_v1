import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-contato',
  templateUrl: './contato.page.html',
  styleUrls: ['./contato.page.scss'],
})
export class ContatoPage implements OnInit {

  constructor(private nav: NavController) { }

  ngOnInit() {
  }

  back(){
    this.nav.navigateBack('home');
  }

  save(){
    alert('Obrigada - retornaremos em breve!');
    this.nav.navigateBack('home');

  }
}
