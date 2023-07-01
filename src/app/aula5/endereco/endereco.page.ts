import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.page.html',
  styleUrls: ['./endereco.page.scss'],
})
export class EnderecoPage implements OnInit {

  endereco: any  = {
    cep: '',
    logradouro: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    estado: ''


  }

  constructor() { }

  ngOnInit() {
  }

  async callAPI(){
    const k = this.endereco.cep.length;
    const cep = this.endereco.cep; 
    
    const url = "https://viacep.com.br/ws/" + cep + '/json/';
    if(k == 8){
      const response = await fetch(url);
      const prom = response.text();

      console.log(prom);
      prom.then((x: any) => {
        x = JSON.parse(x);
        this.endereco.logradouro = x.logradouro,
        this.endereco.complemento = x.complemento,
        this.endereco.bairro = x.bairro,
        this.endereco.cidade = x.localidade,
        this.endereco.estado = x.estado

      })
    }
  }

  salvar(){

  }

}
