import { HttpClient } from '@angular/common/http';
import { Component} from '@angular/core';
import { HttpServiceService } from 'src/services/http-service.service';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.page.html',
  styleUrls: ['./lista-produtos.page.scss'],
})
export class ListaProdutosPage {
  produtos: any = [];

  constructor(
    private http: HttpServiceService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.http.listaProdutos().subscribe(resp =>{
      this.produtos = resp
    })
  }

}
