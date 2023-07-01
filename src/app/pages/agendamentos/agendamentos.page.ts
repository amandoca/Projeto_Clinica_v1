import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-agendamentos',
  templateUrl: './agendamentos.page.html',
  styleUrls: ['./agendamentos.page.scss'],
})
export class AgendamentosPage implements OnInit {

  profissionais:any = []
  constructor(
    private nav: NavController) { 
  }
  
  ngOnInit() {  
  }

  ionViewWillEnter(){
    const aux:any = localStorage.getItem('profissionais');
    this.profissionais = JSON.parse(aux);
  }

  exibeCadastro(){
    this.nav.navigateForward('marcar-consulta')
  }

  editar(){
    this.nav.navigateForward('update-profissional')
  }

  confirmDelete(){
    this.nav.navigateForward('delete')
  }

  deletar(item: any){
    this.profissionais = this.profissionais.filter((el: any) => el != item)
    localStorage.setItem('profissionais', JSON.stringify(this.profissionais))
  }

  detail(item: any){
    this.nav.navigateForward('detail-profissional', item)
  }
  
  back(){
    this.nav.navigateBack('home');
  }


}