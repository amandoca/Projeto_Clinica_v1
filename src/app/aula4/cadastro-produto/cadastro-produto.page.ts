import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from 'src/services/http-service.service';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.page.html',
  styleUrls: ['./cadastro-produto.page.scss'],
})
export class CadastroProdutoPage  {

  url = 'http://localhost/app/cadastro.php'

  constructor(
    private http: HttpServiceService
  ) { }

  ionViewWillEnter(){
    const prod = {marca: 'Nescau', categoria: 'Achocolatado', preco: 10}
    this.http.cadastraProduto(prod).subscribe(resp => console.log(resp)) 
  }

}
