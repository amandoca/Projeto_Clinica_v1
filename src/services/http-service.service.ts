import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  base_url = 'http://localhost/app/';

  constructor(
    private http: HttpClient
  ) { }

  listaProdutos(){
    return this.http.get(this.base_url + 'produtos.php');

  }

  cadastraProduto(produto: any){
    const data = JSON.stringify(produto);
    return this.http.post(this.base_url + 'cadastro.php', data);


  }


}
